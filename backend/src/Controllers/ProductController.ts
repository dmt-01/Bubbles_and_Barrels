import { ParsedQs } from "qs";
import { Controller } from "../Libs/Controller";
import { Product } from "../Models/product";
import { ProductRepository } from "../Repositories/ProductRepository";

type MyQuery = {
  is_alcoholised?: string;
  promos?: string;
  categories?: string;
};

export class ProductController extends Controller {
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
}
