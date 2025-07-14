import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AboutMovieWrapper,
  MovieHeader,
  MovieTitle,
  MovieDate,
  MovieOverview,
  MoviePoster,
  MovieMeta,
  MovieDetails,
  MovieStats,
  PlayButton,
  PlayButtonBottom,
} from "../assets/Wrappers/AboutMovie";

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`/v1/movies/info/${id}`);
    return response.data;
  } catch (error) {
    throw new Response("Movie not found", { status: 404 });
  }
};
const AboutMovie = () => {
  const movieInfo = useLoaderData();
  const navigate = useNavigate();

  // Calculate these values before using them in JSX
  const formattedDate = new Date(movieInfo.release_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const handlePlay = () => {
    navigate(`watch`);
  };

  return (
    <AboutMovieWrapper>
      <MovieHeader>
        <MovieTitle>{movieInfo.title}</MovieTitle>
        <MovieDate>Released: {formattedDate}</MovieDate>
      </MovieHeader>

      <MovieMeta>
        <MoviePoster>
          {movieInfo.poster_path && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={`${movieInfo.title} poster`}
              />
              <PlayButton onClick={handlePlay} aria-label="Play movie" />
            </>
          )}
        </MoviePoster>

        <MovieDetails>
          <MovieOverview>{movieInfo.overview}</MovieOverview>

          <MovieStats>
            <div className="stat-item">
              <span className="stat-label">Rating:</span>
              <span className="stat-value">
                {movieInfo.vote_average?.toFixed(1)}/10
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Runtime:</span>
              <span className="stat-value">
                {formatRuntime(movieInfo.runtime)}
              </span>
            </div>
            {movieInfo.genres?.length > 0 && (
              <div className="stat-item">
                <span className="stat-label">Genres:</span>
                <span className="stat-value">
                  {movieInfo.genres.map((g) => g.name).join(", ")}
                </span>
              </div>
            )}
          </MovieStats>

          <PlayButtonBottom onClick={handlePlay}>Play Movie</PlayButtonBottom>
        </MovieDetails>
      </MovieMeta>
    </AboutMovieWrapper>
  );
};

export default AboutMovie;
