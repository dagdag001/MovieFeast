import { StatusCodes } from "http-status-codes";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  throw new Error("TMDB_API_KEY is not defined in environment variables.");
}

// Get All Movies
export const getAllMovies = async (req, res) => {
  const page = Number(req.query.page) || 1;

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: API_KEY,
          page,
          include_adult: false,
        },
      }
    );
    const movies = response.data.results.map(
      ({ title, id, poster_path, vote_average, vote_count }) => ({
        title,
        id,
        poster_path,
        vote_average,
        vote_count,
      })
    );
    res.status(StatusCodes.OK).json({
      movies,
      page: response.data.page,
      total_pages: response.data.total_pages,
    });
  } catch (error) {
    console.error(
      "Error fetching popular movies:",
      error.response?.data || error.message
    );
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch popular movies." });
  }
};

// Get Movie Info from TMDB
export const getMovieInfn = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: { api_key: API_KEY },
      }
    );

    res.status(StatusCodes.OK).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching movie info:",
      error.response?.data || error.message
    );
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch movie information." });
  }
};

// Get Embed URL from Vidsrc
export const getMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://vidsrc.xyz/embed/movie?tmdb=${id}`
    );
    res.status(StatusCodes.OK).json({
      url: response.request.res.responseUrl,
    });
  } catch (error) {
    console.error("Error fetching embed URL:", error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch movie embed URL." });
  }
};

// Search Movies
export const searchMovies = async (req, res) => {
  const { query } = req.query;
  const page = Number(req.query.page) || 1;

  if (!query) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Query parameter is required.",
    });
  }

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: API_KEY,
          query,
          page,
          include_adult: false,
        },
      }
    );

    const movies = response.data.results.map(
      ({ title, id, poster_path, vote_average, release_date }) => ({
        title,
        id,
        poster_path,
        vote_average,
        release_date,
      })
    );

    res.status(StatusCodes.OK).json({
      page: response.data.page,
      total_pages: response.data.total_pages,
      movies,
    });
  } catch (error) {
    console.error("Search error:", error.response?.data || error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Failed to fetch search results.",
    });
  }
};
