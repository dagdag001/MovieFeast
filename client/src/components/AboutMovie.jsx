import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`/v1/movies/info/${id}`);
    return response.data;
  } catch (error) {
    throw new Response("Movie not found", { status: 404 });
  }
};

const AboutMovie = () => {
  const movieInfo = useLoaderData();
  const { overview, release_date, title } = movieInfo;
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <h3>{release_date}</h3>
    </div>
  );
};
export default AboutMovie;
