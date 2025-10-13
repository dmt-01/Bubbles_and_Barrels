import { Controller } from "../Libs/Controller";
import { Product } from "../Models/product";
import { Request, Response } from "express";
import { ProductRepository } from "../Repositories/ProductRepository";

type MyQuery = {
  is_alcoholised?: string;
  promos?: string;
  categories?: string;
};

export class ProductController extends Controller {
  private product: ProductRepository;
  constructor(request: Request, response: Response) {
    super(request, response);

    this.product = new ProductRepository();
  }

  public async getProductById() {
    const id = this.request.params.id;
    const productRepository = new ProductRepository();
    const product: Product | null = await productRepository.findById(id);

    if (!product) {
      this.response.status(404).json({
        success: false,
        message: "Le produit n'existe pas",
      });
      return;
    }

    this.response.json({
      success: true,
      data: product,
    });
  }

  public async getAllProducts() {
    const { is_alcoholised, promos, categories }: MyQuery = this.request.query;

    const productRepository = new ProductRepository();
    const products: Product[] = await productRepository.findAllProducts(
      this.parseQueryResult(is_alcoholised),
      this.parseQueryResult(promos),
      this.parseQueryArray(categories)
    );

    this.response.json({ success: true, data: products });
  }

  private parseQueryResult(string: string | undefined): boolean | undefined {
    if (string === "true") {
      return true;
    }
    if (string === "false") {
      return false;
    }
    return undefined;
  }

  private parseQueryArray(string: string | undefined): string[] {
    if (string === undefined) {
      return [];
    }
    return string.split(",");
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
