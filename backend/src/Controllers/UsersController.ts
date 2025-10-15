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

  public async postInsertUser() {
    try {
      const parseResult = createUserSchema.safeParse(this.request.body);

      if (!parseResult.success) {
        return this.response.status(400).json({
          message: "Données invalides",
        });
      }
      const {email} = parseResult.data
      const parsedData = parseResult.data;
      const userRepository = new UsersRepository();
      const existuser = await userRepository.findByEmail(email);

      if (existuser) {
        return this.response
        .status(409)
        .json({ message: "Utilisateur déjà existant" });
      }

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
    const validate = AuthService.validateAuthRequest(this.request);

    if (!validate.success) {
      return this.response.status(400).json({ message: validate.message });
    }

    const { email, password } = validate.data;

    const userRepository = new UsersRepository();

    const existingUser = await userRepository.findByEmail(email);
    const existingUserId = existingUser?.getUserId();

    if (!existingUser || !existingUserId) {
      return this.response
        .status(401)
        .json({ message: "Email ou mot de passe invalide" });
    }

    const validPassword = await argon2.verify(
      existingUser.getPassword(),
      password
    );

    if (!validPassword) {
      return this.response
        .status(401)
        .json({ message: "Email ou mot de passe invalide" });
    }

    const tokenRepository = new TokenRepository();
    let token = await tokenRepository.findByUserId(existingUserId);

    if (!token) {
      token = new Token(existingUserId);
      const tokenId = await tokenRepository.create(token);

      if (!tokenId) {
        return this.response
          .status(500)
          .json({ message: "Une erreur est survenue" });
      }
    }

    this.response.cookie("userToken", token.getToken(), {
      httpOnly: true,
    });

    return this.response.status(200).json({
      message: "Connexion réussie",
      token: token.getToken(),
    });
  }
}
