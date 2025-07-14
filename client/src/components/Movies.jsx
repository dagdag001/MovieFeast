import { useNavigate, useLoaderData, useSearchParams } from "react-router-dom";
import {
  MoviesWrapper,
  MovieCard,
  MoviePoster,
  MovieInfo,
  RatingBadge,
  PaginationWrapper,
  PaginationControls,
  PaginationButton,
  PaginationIcon,
  PageIndicator,
} from "../assets/Wrappers/Movies";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import solid_black from "../assets/images/Solid_black.svg";
import axios from "axios";

export const moviesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";

  try {
    const response = await axios.get(`/v1/movies?page=${page}`);
    return {
      movies: response.data.movies,
      page: response.data.page,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error("Error loading movies:", error);
    return { movies: [], page: 1, total_pages: 0 };
  }
};

const Movies = () => {
  const [searchParams] = useSearchParams();
  const { movies = [], page = 1, total_pages = 0 } = useLoaderData();
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const handleClick = (id) => navigate(`/info/${id}`);

  return (
    <div className="page-container">
      <MoviesWrapper>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => handleClick(movie.id)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick(movie.id)}
            aria-label={`View details for ${movie.title}`}
          >
            <MoviePoster
              src={
                movie.poster_path
                  ? `${baseUrl}${movie.poster_path}`
                  : solid_black
              }
              alt={movie.title}
              onError={(e) => {
                e.target.src = solid_black;
              }}
            />
            <MovieInfo>
              <h3>{movie.title}</h3>
              <p>
                <span>⭐</span>
                {movie.vote_average?.toFixed(1) ?? "N/A"}
              </p>
            </MovieInfo>
            {movie.vote_average != null && (
              <RatingBadge>{movie.vote_average.toFixed(1)}</RatingBadge>
            )}
          </MovieCard>
        ))}
      </MoviesWrapper>

      {total_pages > 1 && (
        <PaginationWrapper>
          <PaginationControls>
            <PaginationButton
              className={page <= 1 ? "disabled" : ""}
              onClick={() => navigate(`/?page=${Number(page) - 1}`)}
              disabled={page <= 1}
              aria-label="Previous page"
            >
              <PaginationIcon as={FaAngleLeft} />
              <span>Previous</span>
            </PaginationButton>

            <PageIndicator>
              Page <span className="current-page">{page}</span> of {total_pages}
            </PageIndicator>

            <PaginationButton
              className={page >= total_pages ? "disabled" : ""}
              onClick={() => navigate(`/?page=${Number(page) + 1}`)}
              disabled={page >= total_pages}
              aria-label="Next page"
            >
              <span>Next</span>
              <PaginationIcon as={FaAngleRight} />
            </PaginationButton>
          </PaginationControls>
        </PaginationWrapper>
      )}
    </div>
  );
};

export default Movies;
