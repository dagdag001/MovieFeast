import styled from "styled-components";

export const AboutMovieWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor || "#333"};
  background-color: ${({ theme }) => theme.bodyBg || "#fff"};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.borderColor || "rgba(0,0,0,0.1)"};
  }
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  font-family: "Raleway", sans-serif;
  margin: 0;
  color: ${({ theme }) => theme.textColor || "#333"};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MovieDate = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) =>
    theme.name === "dark" ? "#ffd166" : theme.primaryColor || "#2a9d8f"};
  margin: 0;
`;

export const MovieOverview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
  color: ${({ theme }) => theme.textColor || "#333"};
`;

export const MoviePoster = styled.div`
  width: 100%;
  max-width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.cardBg || "#f5f5f5"};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .play-button {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: rgba(255, 209, 102, 0.9);
  color: #121212;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid #121212;
    margin-left: 5px;
  }

  &:hover {
    background: rgba(255, 209, 102, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const MovieMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieDetails = styled.div`
  flex: 1;
`;

export const MovieStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  .stat-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-label {
    font-weight: 600;
    color: ${({ theme }) => theme.textColor || "#333"};
    min-width: 80px;
  }

  .stat-value {
    color: ${({ theme }) =>
      theme.name === "dark" ? "#ffd166" : theme.primaryColor || "#2a9d8f"};
  }
`;

export const PlayButtonBottom = styled.button`
  background: ${({ theme }) =>
    theme.name === "dark" ? "#ffd166" : theme.primaryColor || "#2a9d8f"};
  color: ${({ theme }) => (theme.name === "dark" ? "#121212" : "#fff")};
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid
      ${({ theme }) => (theme.name === "dark" ? "#121212" : "#fff")};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
