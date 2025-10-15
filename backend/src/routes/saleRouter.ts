import { Router } from "express";
import { SaleController } from "../controllers/SaleController";

const saleRouter = Router();

saleRouter.get("/", (request, response) => {
  const controller = new SaleController(request, response);
  controller.salePage();
});
SaleController;
export default saleRouter;
