import { UsersRepository } from "../Repositories/UsersRepository";
import { createUserSchema } from "../Libs/schemaZod/schemaUsers";
import { Controller } from "../Libs/Controller";
import argon2 from "argon2";

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
}
