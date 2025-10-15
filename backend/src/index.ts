import express from "express";
import router from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});
