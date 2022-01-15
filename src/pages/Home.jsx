import MovieItems from "../components/movies/MovieItems";
import MovieSearch from "../components/movies/MovieSearch";
import CompareTool from "../components/compare/CompareTool";

function Home() {
  return (
    <div className="">
      <MovieSearch />
      <CompareTool />
      <MovieItems />
    </div>
  );
}

export default Home;
