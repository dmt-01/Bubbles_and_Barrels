import { Controller } from "../Libs/Controller";
import { Product } from "../Models/product";
import { ProductRepository } from "../Repositories/ProductRepository";

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

  public async getAllProducts() {}
}
