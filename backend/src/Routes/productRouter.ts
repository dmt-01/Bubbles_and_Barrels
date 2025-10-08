import { Router } from "express";
import { ProductController } from "../Controllers/ProductController";

const productRouter = Router();

productRouter.get("/:id", (request, response) => {
  const productController = new ProductController(request, response);
  productController.getProductById();
});
