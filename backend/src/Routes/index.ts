import { Router } from "express";
import categoryrouter from "./categoryRouter";
import saleRouter from "./saleRouter";
import productRouter from "./productRouter";

const router = Router();
router.use("/product", productRouter);
router.use("/categories", categoryrouter);
router.use("/sale", saleRouter);

export default router;
