import styled from "styled-components";

const Wrapper = styled.main`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bodyBg || "#ffffff"};
  z-index: 1000;
  overflow: hidden;
  transition: background 0.3s ease;

  .error-image {
    max-width: 100%;
    max-height: 100vh;
    object-fit: contain;
    z-index: 1;
    filter: ${({ theme }) =>
      theme.bodyBg === "#121212" ? "invert(0)" : "invert(1)"};
  }

  .error-content {
    position: absolute;
    z-index: 2;
    text-align: center;
    color: ${({ theme }) => theme.headerText || "#333"};
    padding: 2rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
    text-shadow: 0 0 10px
      ${({ theme }) =>
        theme.headerHover === "#ffd166"
          ? "rgba(255, 209, 102, 0.8)"
          : "rgba(42, 157, 143, 0.8)"};
  }

  .btn {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: "Raleway", Arial, sans-serif;
    color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
    position: relative;
    padding: 15px 30px;
    transition: color 0.3s ease;
    display: inline-block;
    margin-top: 2rem;

    span:first-child:before,
    span:first-child:after,
    span:last-child:before,
    span:last-child:after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: transparent;
      transition: 0.2s;
      opacity: 0;
      border-color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
    }

    span:first-child:before {
      top: 0;
      left: 0;
      border-top: 2px solid;
      border-left: 2px solid;
    }

    span:first-child:after {
      top: 0;
      right: 0;
      border-top: 2px solid;
      border-right: 2px solid;
    }

    span:last-child:before {
      bottom: 0;
      left: 0;
      border-bottom: 2px solid;
      border-left: 2px solid;
    }

    span:last-child:after {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid;
      border-right: 2px solid;
    }

    &:hover {
      color: ${({ theme }) => theme.headerHover || "#2a9d8f"};

      span:first-child:before {
        top: -10px;
        left: -10px;
        opacity: 1;
      }

      span:first-child:after {
        top: -10px;
        right: -10px;
        opacity: 1;
      }

      span:last-child:before {
        bottom: -10px;
        left: -10px;
        opacity: 1;
      }

      span:last-child:after {
        bottom: -10px;
        right: -10px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .btn {
      font-size: 1.2rem;
      padding: 10px 20px;
    }
  }
`;

export default Wrapper;
