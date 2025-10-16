import express from "express";
import router from "./routes";
import path from "node:path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/image", express.static(path.join(path.resolve("public/assets"))));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});
