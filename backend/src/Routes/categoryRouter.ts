import { Router } from "express";
import { categoriesController } from "../Controllers/catogoriesController";

const categoryrouter = Router();

categoryrouter.get("/", (request, response) => {
  const controller = new categoriesController(request, response);
  controller.categoriesPage();
});

export default categoryrouter;
