import styled from "styled-components";

const Wrapper = styled.footer`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,500,800");

  height: 10vh;
  background-color: ${({ theme }) => theme.bodyBg || "#f5f5f5"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", Arial, sans-serif;
  transition: all 0.3s ease;
  border-top: 1px solid ${({ theme }) => theme.borderColor || "rgba(0,0,0,0.1)"};
  padding: 0 2rem;

  .copyright {
    color: ${({ theme }) => theme.headerText || "#333"};
    font-size: 0.9em;
    position: relative;
    padding: 5px;

    /* Add the same corner bracket animation as header */
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }

    &::before {
      top: 0;
      left: 0;
      border-top: 2px solid;
      border-left: 2px solid;
    }

    &::after {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid;
      border-right: 2px solid;
    }

    &:hover {
      color: ${({ theme }) => theme.headerHover || "#2a9d8f"};

      &::before,
      &::after {
        opacity: 1;
      }

      &::before {
        top: -5px;
        left: -5px;
      }

      &::after {
        bottom: -5px;
        right: -5px;
      }
    }
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-link {
    width: 24px;
    height: 24px;
    position: relative;
    transition: all 0.3s ease;

    img {
      filter: ${({ theme }) =>
        theme.bodyBg === "#121212" ? "invert(1)" : "invert(0)"};
      transition: filter 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);

      &::before,
      &::after {
        opacity: 1;
      }

      img {
        filter: ${({ theme }) =>
          theme.headerHover === "#ffd166"
            ? "invert(77%) sepia(36%) saturate(541%) hue-rotate(344deg) brightness(102%) contrast(101%)"
            : "invert(47%) sepia(35%) saturate(542%) hue-rotate(124deg) brightness(92%) contrast(89%)"};
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-top: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-left: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      right: -5px;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-bottom: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-right: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }
  }
`;

export default Wrapper;
