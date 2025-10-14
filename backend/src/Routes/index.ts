import { Router } from "express";
import categoryrouter from "./categoryRouter";
import saleRouter from "./saleRouter";
import productRouter from "./productRouter";
import usersRouter from "./usersRouter";

const router = Router();

router.use("/product", productRouter);
router.use("/categories", categoryrouter);
router.use("/sale", saleRouter);
router.use("/", usersRouter)

export default router;
