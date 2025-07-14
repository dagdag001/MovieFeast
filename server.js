import express from "express";
import movieRouter from "./routes/movieRouter.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());

app.use("/v1/movies", movieRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

