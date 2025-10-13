import { Router } from "express";
import { productController } from "../Controllers/productController";

const productRouter = Router();

productRouter.get("/allproduct", (request, response) => {
  const controller = new productController(request, response);
  controller.allProduct();
});

productRouter.get("/suggestion", (request, response) => {
  const controller = new productController(request, response);
  controller.suggestionPage();
});

productRouter.get("/:id", (request, response) => {
  const productController = new ProductController(request, response);
  productController.getProductById();
});

export default productRouter;