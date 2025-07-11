import express from "express";
import movieRouter from "./routes/movieRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/v1/movies", movieRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

