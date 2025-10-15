import { Router } from "express";
import { UsersController } from "../controllers/UsersController";



const usersRouter = Router();

usersRouter.post("/insertusers", async (request, response) => {
  const controller = new UsersController(request, response);
  await controller.postInsertUser();
});

usersRouter.post("/login", async (request, response) => {
  const controller = new UsersController(request, response);
  await controller.logIn();
})

export default usersRouter;