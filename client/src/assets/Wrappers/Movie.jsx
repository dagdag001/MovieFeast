import styled, { css, keyframes } from "styled-components";

// Animation definitions
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Common styles
const overlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: #000;
`;

// Component styles
export const MovieContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  background: ${({ theme }) => theme.cardBg || "#f5f5f5"};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 10%;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;
  isolation: isolate;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  aspect-ratio: 16/9;
`;

export const MovieInfo = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.bodyBg || "#fff"};
  border-top: 1px solid ${({ theme }) => theme.borderColor || "rgba(0,0,0,0.1)"};

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const MovieTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.textColor || "#333"};
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
`;

export const MovieId = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.primaryColor || "#2a9d8f"};
  font-size: 0.9rem;
  opacity: 0.8;
  font-family: monospace;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(2px);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ErrorOverlay = styled.div`
  ${overlayStyles}
  z-index: 5;
`;

export const LoadingOverlay = styled.div`
  ${overlayStyles}
  z-index: 2;
`;

export const ReloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #ffd166;
  color: #121212;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #ffdf8e;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #ffd166;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  will-change: transform;
`;
