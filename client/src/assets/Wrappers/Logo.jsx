import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.headerText || "#333"};
  margin-right: auto;
  padding-left: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
  }

  .logo-part {
    position: relative;
    display: inline-block;
  }

  .hd {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.headerHover || "#2a9d8f"};
  }

  .feast {
    position: relative;
  }

  .feast:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.headerHover || "#2a9d8f"};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover .feast:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export default Wrapper;
