import { useContext } from "react";
import MovieContext from "../../context/moviedb/MovieContext";
import MovieItem from "./MovieItem";
import MoviePage from "./MoviePage";

function MovieItems() {
  const { titles } = useContext(MovieContext);

  if (titles.length === 0) {
    return null;
  }

  return titles.Search.length > 0 ? (
    <>
      <div className="mt-12 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {titles.Search.map((title) => (
          <MovieItem key={title.imdbID} item={title} />
        ))}
      </div>
      <MoviePage />
    </>
  ) : (
    <div className="mt-5 flex justify-center items-center h-full">
      Why not try searching for something?
    </div>
  );
}

export default MovieItems;
