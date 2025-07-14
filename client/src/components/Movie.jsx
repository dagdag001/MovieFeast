import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  MovieContainer,
  PlayerWrapper,
  StyledIframe,
  MovieInfo,
  MovieTitle,
  MovieId,
  BackButton,
  ErrorOverlay,
  LoadingOverlay,
  ReloadButton,
  Spinner,
} from "../assets/Wrappers/Movie";
import { FaArrowLeft, FaRedo } from "react-icons/fa";
import { useState, useEffect } from "react";

export const movieLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`/v1/movies/embed/${id}`);
    const moveInfo = await axios.get(`/v1/movies/info/${id}`);
    return { url: response.data.url, id, title: moveInfo.data.title };
  } catch (error) {
    throw new Response("Movie not found", { status: 404 });
  }
};

const Movie = () => {
  const { url, id, title } = useLoaderData();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  const handleReload = () => {
    setHasError(false);
    setIsLoading(true);
    setIframeLoaded(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MovieContainer>
      <PlayerWrapper>
        <BackButton onClick={handleBack} aria-label="Go back">
          <FaArrowLeft />
        </BackButton>

        {!hasError && (
          <StyledIframe
            src={url}
            allowFullScreen
            title={title}
            onLoad={() => {
              setIframeLoaded(true);
              setIsLoading(false);
            }}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            style={{ visibility: iframeLoaded ? "visible" : "hidden" }}
          />
        )}

        {isLoading && (
          <LoadingOverlay>
            <Spinner />
            <p>Loading movie...</p>
          </LoadingOverlay>
        )}

        {hasError && (
          <ErrorOverlay>
            <p>Failed to load the movie</p>
            <ReloadButton onClick={handleReload}>
              <FaRedo />
              Try Again
            </ReloadButton>
          </ErrorOverlay>
        )}
      </PlayerWrapper>

      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieId>ID: {id}</MovieId>
      </MovieInfo>
    </MovieContainer>
  );
};

export default Movie;
