import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const productRouter = Router();

productRouter.get("/allproduct", (request, response) => {
  const controller = new ProductController(request, response);
  controller.allProduct();
});

productRouter.get("/suggestion", (request, response) => {
  const controller = new ProductController(request, response);
  controller.suggestionPage();
});

productRouter.get("/:id", (request, response) => {
  const productController = new ProductController(request, response);
  productController.getProductById();
});

productRouter.get("/", (request, response) => {
  const controller = new ProductController(request, response);
  controller.getAllProducts();
});

export default productRouter;
