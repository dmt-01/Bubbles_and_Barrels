import { Controller } from "../libs/Controller";
import { Request, Response } from "express";
import { SaleRepository } from "../repositories/SaleRepository";

export class SaleController extends Controller {
  private saleRepo: SaleRepository;

  constructor(request: Request, response: Response) {
    super(request, response);
    this.saleRepo = new SaleRepository();
  }

  public async salePage() {
    try {
      const sales = await this.saleRepo.saleProduct();
      this.response.status(200).json(sales);
    } catch (error) {
      console.error(error);
      this.response.status(500).json({ message: "Erreur serveur." });
    }
  }
}
