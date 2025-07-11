import styled from "styled-components";

export const MoviesWrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const MovieCard = styled.div`
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  aspect-ratio: 2/3;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;

  ${MovieCard}:hover & {
    opacity: 0.9;
  }
`;

export const MovieInfo = styled.div`
  padding: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);

  h3 {
    font-size: clamp(14px, 2vw, 18px);
    margin: 0 0 4px 0;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: clamp(12px, 1.8vw, 14px);
    margin: 0;
    color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  ${MovieCard}:hover & {
    transform: translateY(0);
  }
`;

export const RatingBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.primary || "#2a9d8f"};
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.paginationBg || "rgba(0, 0, 0, 0.05)"};
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.paginationHoverBg || "rgba(0, 0, 0, 0.1)"};
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.textColor};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;

  &:hover:not(.disabled) {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const PaginationIcon = styled.span`
  font-size: 1.2rem;
  transition: color 0.3s ease;
  color: ${({ theme }) => theme.textColor};

  ${PaginationButton}:hover:not(.disabled) & {
    color: ${({ theme }) => (theme.mode === "dark" ? "#FFD700" : "#1E90FF")};
  }
`;

export const PageIndicator = styled.div`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  min-width: 120px;
  text-align: center;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .current-page {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 100px;
  }
`;
export const SearchResultsWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;

  .search-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      color: ${({ theme }) => theme.textColor};
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    .results-count {
      color: ${({ theme }) => theme.secondaryText};
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .no-results {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    color: ${({ theme }) => theme.secondaryText};
    gap: 1rem;

    p {
      font-size: 1.2rem;
      margin: 0;
    }
  }
`;
