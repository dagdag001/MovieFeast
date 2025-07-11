import { useSearchParams, useLoaderData, useNavigate } from "react-router-dom";
import {
  MoviesWrapper,
  MovieCard,
  MoviePoster,
  MovieInfo,
  RatingBadge,
  PaginationWrapper,
  PaginationControls,
  PaginationButton,
  PageIndicator,
} from "../assets/Wrappers/Movies";
import { FaSearch, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import solid_black from "../assets/images/Solid_black.svg";
import axios from "axios";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const page = url.searchParams.get("page") || "1";

  if (!query.trim()) {
    return { page: 1, total_pages: 0, movies: [] };
  }

  try {
    const { data } = await axios.get(
      `/api/v1/movies/search?query=${encodeURIComponent(query)}&page=${page}`
    );
    return data; // { page, total_pages, movies }
  } catch (error) {
    console.error("Search error:", error);
    return { page: 1, total_pages: 0, movies: [] };
  }
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { movies = [], page = 1, total_pages = 0 } = useLoaderData();
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const handleClick = (id) => navigate(`/info/${id}`);

  return (
    <div className="search-results-page">
      <div className="search-header">
        <h2>Search Results for "{query}"</h2>

      </div>

      <MoviesWrapper>
        {movies.length > 0 ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <div className="no-results">
            <FaSearch size={48} />
            <p>No movies found matching "{query}"</p>
          </div>
        )}
      </MoviesWrapper>

      {total_pages > 1 && (
        <PaginationWrapper>
          <PaginationControls>
            <PaginationButton
              className={page <= 1 ? "disabled" : ""}
              onClick={() =>
                navigate(`/search?query=${query}&page=${Number(page) - 1}`)
              }
              disabled={page <= 1}
              aria-label="Previous page"
            >
              <FaAngleLeft />
              <span>Previous</span>
            </PaginationButton>

            <PageIndicator>
              Page <span className="current-page">{page}</span> of {total_pages}
            </PageIndicator>

            <PaginationButton
              className={page >= total_pages ? "disabled" : ""}
              onClick={() =>
                navigate(`/search?query=${query}&page=${Number(page) + 1}`)
              }
              disabled={page >= total_pages}
              aria-label="Next page"
            >
              <span>Next</span>
              <FaAngleRight />
            </PaginationButton>
          </PaginationControls>
        </PaginationWrapper>
      )}
    </div>
  );
};

export default SearchPage;
