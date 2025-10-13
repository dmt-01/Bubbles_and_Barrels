import { Controller } from "../Libs/Controller";
import { Request, Response } from "express";
import { categoriesRepository } from "../Repositories/categoriesRepository";

export class categoriesController extends Controller {
  private category: categoriesRepository;
  constructor(request: Request, response: Response) {
    super(request, response);

    this.category = new categoriesRepository();
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
