import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,500,800");

  .navBar {
    height: 10vh;
    background-color: ${({ theme }) => theme.bodyBg || "#f5f5f5"};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: "Raleway", Arial, sans-serif;
    transition: all 0.3s ease;
    border-bottom: 1px solid
      ${({ theme }) => theme.borderColor || "rgba(0,0,0,0.1)"};
  }

  ul {
    padding: 0;
    display: flex;
    justify-content: end;
    margin-right: 2rem;
  }

  ul li {
    list-style: none;
    padding: 10px 20px;

    &.theme-toggle {
      padding: 0;
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1em;
    color: ${({ theme }) => theme.headerText || "#333"};
    position: relative;
    padding: 5px;
    transition: color 0.3s ease;
    display: block;

    &.active {
      color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
    }

    span:first-child:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-top: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-left: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }

    span:first-child:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-top: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-right: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }

    span:last-child:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-bottom: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-left: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
    }

    span:last-child:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-bottom: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      border-right: 2px solid ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transition: 0.2s;
      opacity: 0;
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

  .theme-toggle button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.headerText || "#333"};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
      transform: scale(1.1);
    }
  }

  .theme-icon {
    font-size: 1.2em;
  }
 
  .search-container {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    flex-grow: 1;
    max-width: 500px;
  }

  .search-container form {
    display: flex;
    width: 100%;
  }

  .search-container input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-500);
    border-radius: 4px 0 0 4px;
    background: var(--background-color);
    color: var(--text-color);
  }

  .search-container button {
    padding: 0.5rem 1rem;
    background: var(--primary-500);
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-icon {
    font-size: 1rem;
  }
`;

export default Wrapper;
