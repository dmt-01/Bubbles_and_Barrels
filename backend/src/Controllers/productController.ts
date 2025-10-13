import { Controller } from "../Libs/Controller";
import { Request, Response } from "express";
import { ProductRepository } from "../Repositories/productRepository";
export class productController extends Controller {
  private product: ProductRepository;
  constructor(request: Request, response: Response) {
    super(request, response);

    this.product = new ProductRepository();
  }

  public async allProduct() {
    try {
      const allproduct = await this.product.findProduct();
      this.response.status(200).json(allproduct);
      console.log(allproduct);
    } catch (error) {
      console.error(error);
      this.response.status(500).json({ message: "Erreur serveur." });
    }
  }

  public async suggestionPage() {
    try {
      const products = await this.product.findProduct();
      const randomProducts = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      this.response.status(200).json(randomProducts);
    } catch (error) {
      console.error("Erreur lors de la récupération des suggestions :", error);
      this.response.status(500).json({ message: "Erreur serveur." });
    }
  }
}
