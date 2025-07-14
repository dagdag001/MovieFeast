import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../assets/Wrappers/theme";
import GlobalStyles from "../assets/Wrappers/GlobalStyles";

const Home = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? darkTheme : lightTheme;
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <header>
        <Header
          currentTheme={currentTheme === darkTheme ? "dark" : "light"}
          setCurrentTheme={toggleTheme}
        />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default Home;
