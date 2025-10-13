import { Controller } from "../Libs/Controller";
import { Request, Response } from "express";
import { TestRepository } from "../Repositories/TestRepository";

export class TestController extends Controller {
  private testRepository: TestRepository;

  constructor(request: Request, response: Response) {
    super(request, response);

    this.testRepository = new TestRepository();
  }

  public async testPage() {
    try {
      const users = await this.testRepository.findAll();
      this.response.status(200).json(users);
    } catch (error) {
      console.error(error);
      this.response.status(500).json({ message: "Erreur serveur." });
    }
  }
}
