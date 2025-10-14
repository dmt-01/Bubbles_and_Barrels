import { Router } from "express";
import { UsersController } from "../Controllers/UsersController";


const usersRouter = Router();

usersRouter.post("/insertusers", async (request, response) => {
  const controller = new UsersController(request, response);
  await controller.postUsersAdress();
});

export default usersRouter;