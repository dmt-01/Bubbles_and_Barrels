import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

export class CategoriesController extends Controller {
  private category: CategoriesRepository;
  constructor(request: Request, response: Response) {
    super(request, response);

    this.category = new CategoriesRepository();
  }

  public async categoriesPage() {
    try {
      const category = await this.category.findAll();
      this.response.status(200).json(category);
    } catch (error) {
      console.error(error);
      this.response.status(500).json({ message: "Erreur serveur." });
    }
  }
}
