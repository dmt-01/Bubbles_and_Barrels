import { Router } from "express";
import testRouter from "./testRouter";
import productRouter from "./productRouter";

const router = Router();

router.use("/test", testRouter);

router.use("/products", productRouter);

export default router;
