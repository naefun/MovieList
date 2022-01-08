import { useContext } from "react";
import MovieContext from "../../context/moviedb/MovieContext";
import MovieItem from "./MovieItem";
import MoviePage from "./MoviePage";

function MovieItems() {
  const { titles, previousSearch } = useContext(MovieContext);

  if (titles.length === 0) {
    return (
      <div className="mt-5 flex justify-center items-center h-full">
        Why not try searching for something?
      </div>
    );
  } else if (titles.Response === "False") {
    return (
      <div className="mt-5 flex justify-center items-center h-full">
        Sorry, we could not find any titles matching "{previousSearch}"
      </div>
    );
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
  ) : null;
}

export default MovieItems;
