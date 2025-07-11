import Wrapper from "../assets/Wrappers/Footer";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="copyright">© 2025 Company, Inc</div>
      <div className="social-links">
        <a href="#" className="social-link" aria-label="Instagram">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#" className="social-link" aria-label="Facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
