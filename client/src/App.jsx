import Home from "./pages/Home";
import Movie from "./components/Movie";
import Movies, { moviesLoader } from "./components/Movies";
import AboutMoviePage from "./pages/AboutMoviePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { movieLoader } from "./components/Movie";
import { loader as aboutMovieLoader } from "./pages/AboutMoviePage";
import { loader as searchLoader } from "./components/SearchBar";
import Error from "./pages/Error";
import SearchPage from "./components/SearchBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: moviesLoader,
      },

      {
        path: "info/:id",
        children: [
          {
            index: true,
            element: <AboutMoviePage />,
            loader: aboutMovieLoader,
          },
          {
            path: "watch",
            element: <Movie />,
            loader: movieLoader,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
