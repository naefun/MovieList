import { useEffect, useContext } from "react";
import MovieContext from "../context/moviedb/MovieContext";
import { getComparedTitles } from "../context/moviedb/MovieActions";
import { Navigate } from "react-router-dom";
import ComparisonCard from "../components/compare/ComparisonCard";

function CompareItems() {
  const { titlesToCompare, dispatch, movie1, movie2, loading } =
    useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getTitleData = async (_callback) => {
      const titleData = await getComparedTitles(
        titlesToCompare[0][0],
        titlesToCompare[1][0]
      );
      dispatch({ type: "GET_COMPARED_TITLES", payload: titleData });
    };

    getTitleData();
  }, []);

  if (titlesToCompare[0][0] === "" || titlesToCompare[1][0] === "") {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-2xl">{movie1.Title}</h1>
          <p className="text-red-500 text-5xl font-permanentMarker">vs</p>

          <h1 className="text-2xl">{movie2.Title}</h1>
        </div>

        <div className="flex flex-col gap-5">
          <ComparisonCard
            title="Released"
            value1={movie1.Released}
            value2={movie2.Released}
          />

          <ComparisonCard
            title="Actors"
            value1={movie1.Actors}
            value2={movie2.Actors}
          />
          <ComparisonCard
            title="Director"
            value1={movie1.Director}
            value2={movie2.Director}
          />
          <ComparisonCard
            title="Rated"
            value1={movie1.Rated}
            value2={movie2.Rated}
          />
          <ComparisonCard
            title="Revenue"
            value1={movie1.BoxOffice}
            value2={movie2.BoxOffice}
          />
        </div>
      </div>
    );
  }
}

export default CompareItems;
