import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import errorImage from "../assets/images/page-not-found.svg";

const Error = () => {
  const error = useRouteError();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <Wrapper>
      <img src={errorImage} alt="Error background" className="error-image" />
      <div className="error-content">
        <Link to="/" className="btn">
          <span></span>
          <span></span>
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
