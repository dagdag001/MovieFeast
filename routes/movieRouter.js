import { Router } from "express";

import {
  getAllMovies,
  getMovie,
  getMovieInfn,
  searchMovies,
} from "../controllers/movieController.js";
const router = Router();

router.route("/").get(getAllMovies);
router.route("/embed/:id").get(getMovie);
router.route("/info/:id").get(getMovieInfn);
router.route("/search").get(searchMovies);

export default router;
