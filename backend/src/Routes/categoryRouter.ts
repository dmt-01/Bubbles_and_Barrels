import { Router } from "express";
import { CategoriesController } from "../Controllers/catogoriesController";

const categoryrouter = Router();

categoryrouter.get("/", (request, response) => {
  const controller = new CategoriesController(request, response);
  controller.categoriesPage();
});

export default categoryrouter;
