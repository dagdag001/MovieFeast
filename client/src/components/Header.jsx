import Wrapper from "../assets/Wrappers/Header";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ currentTheme, setCurrentTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "dark" : "light");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <Wrapper>
      <nav className="navBar">
        <Logo />

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Submit Search">
              <FaSearch className="search-icon" />
            </button>
          </form>
        </div>

        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              <span>home</span>
              <span className="hover-effect"></span>
              <span className="hover-effect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <span>about</span>
              <span className="hover-effect"></span>
              <span className="hover-effect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              <span>services</span>
              <span className="hover-effect"></span>
              <span className="hover-effect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <span>contact</span>
              <span className="hover-effect"></span>
              <span className="hover-effect"></span>
            </NavLink>
          </li>
          <li className="theme-toggle">
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {currentTheme === "light" ? (
                <FaMoon className="theme-icon" />
              ) : (
                <FaSun className="theme-icon" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
