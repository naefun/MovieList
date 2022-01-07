import MovieItems from "../components/movies/MovieItems";
import MovieSearch from "../components/movies/MovieSearch";

function Home() {
  return (
    <div className="">
      <MovieSearch />
      <MovieItems />
    </div>
  );
}

export default Home;
