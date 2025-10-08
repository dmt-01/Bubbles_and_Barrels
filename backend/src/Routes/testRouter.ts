import { Router } from "express";
import { TestController } from "../Controllers/testController";


const testRouter = Router();

testRouter.get("/", (request, response) => {
  const controller = new TestController(request, response);
  controller.testPage();
});

export default testRouter;
