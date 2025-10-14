import { UsersRepository } from "../Repositories/UsersRepository";
import { createUserSchema } from "../Libs/schemaZod/schemaUsers";
import { Controller } from "../Libs/Controller";
import argon2 from "argon2";
import { AuthService } from "../Services/AuthService";
import { TokenRepository } from "../Repositories/TokenRepository";
import Token from "../Models/Token";

export class UsersController extends Controller {
  public async getUsersId() {
    const userId = this.request.params.id;
    const productRepository = new UsersRepository();
    const product = await productRepository.findAllUsers();

    if (!product) {
      this.response.status(404).json({
        success: false,
        message: "Le user n'existe pas",
      });
      return;
    }

    this.response.json({
      success: true,
      data: product,
    });
  }

  public async postUsersAdress() {
    try {
      const parseResult = createUserSchema.safeParse(this.request.body);

      if (!parseResult.success) {
        return this.response.status(400).json({
          message: "Données invalides",
        });
      }

      const parsedData = parseResult.data;
      parsedData.password = await argon2.hash(parsedData.password);

      const usersRepo = new UsersRepository();
      const newUser = await usersRepo.insertUser(parsedData);

      return this.response.status(201).json({
        message: "Utilisateur créé avec succès !",
        user: newUser,
      });
    } catch (error) {
      console.error("Erreur serveur:", error);
      return this.response.status(500).json({ message: "Erreur serveur" });
    }
  }

  public async logIn() {
    // 1 Valider la requête de connexion
    const validate = AuthService.validateAuthRequest(this.request);

    if (!validate.success) {
      return this.response.status(400).json({ message: validate.message });
    }

    const { email, password } = validate.data;

    const userRepository = new UsersRepository();

    // 2 Rechercher l’utilisateur par email
    const existingUser = await userRepository.findByEmail(email);
    const existingUserId = existingUser?.getUserId();

    if (!existingUser || !existingUserId) {
      return this.response
        .status(401)
        .json({ message: "Email ou mot de passe invalide" });
    }

    // 3 Vérifier la concordance entre le mot de passe soumis et le hash enregistré
    const validPassword = await argon2.verify(
      existingUser.getPassword(),
      password
    );

    if (!validPassword) {
      return this.response
        .status(401)
        .json({ message: "Email ou mot de passe invalide" });
    }

    // 4 Récupérer le token existant de l’utilisateur en base de données
    const tokenRepository = new TokenRepository();
    let token = await tokenRepository.findByUserId(existingUserId);

    // 5 Créer et enregistrer un token si aucun n’est connu
    if (!token) {
      token = new Token(existingUserId);
      const tokenId = await tokenRepository.create(token);

      if (!tokenId) {
        return this.response
          .status(500)
          .json({ message: "Une erreur est survenue" });
      }
    }

    // 6 Attacher le cookie httpOnly contenant le token à la réponse
    this.response.cookie("userToken", token.getToken(), {
      httpOnly: true,
    });

    // 7 Répondre avec succès
    return this.response.status(200).json({
      message: "Connexion réussie",
      token: token.getToken(),
    });
  };
}
