import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.bodyBg || "#f5f5f5"};
    color: ${({ theme }) => theme.textColor || "#333"};
    line-height: 1.5;
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Scrollbar styles */
  body.error-page header {
  display: none !important;
}

body.error-page {
  overflow: hidden;
}
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack || "#f1f1f1"};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarThumb || "#888"};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbarThumbHover || "#555"};
  }
`;

export default GlobalStyles;
