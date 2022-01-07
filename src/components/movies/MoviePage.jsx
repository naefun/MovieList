import { useContext, useState } from "react";
import MovieContext from "../../context/moviedb/MovieContext";
import { searchTitles } from "../../context/moviedb/MovieActions";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function MoviePage() {
  const { titles, dispatch, currentPage, previousSearch } =
    useContext(MovieContext);

  const handlePrevious = async () => {
    if (currentPage === 1) {
      console.warn("There are no previous pages.");
    } else {
      const newPage = currentPage - 1;
      const titles = await searchTitles(previousSearch, newPage);
      dispatch({ type: "GET_TITLES", payload: titles });
      dispatch({ type: "SET_CURRENT_PAGE", payload: newPage });
      window.scroll({
        top: 0,
        left: 0,
      });
    }
  };

  const handleNext = async () => {
    if (titles.length < 10) {
      console.warn("There are no more pages.");
    } else {
      const newPage = currentPage + 1;
      const titles = await searchTitles(previousSearch, newPage);
      dispatch({ type: "GET_TITLES", payload: titles });
      dispatch({ type: "SET_CURRENT_PAGE", payload: newPage });
      window.scroll({
        top: 0,
        left: 0,
      });
    }
  };

  return titles.length > 0 ? (
    <div className="flex flex-row gap-5 w-full justify-center mt-5 text-neutral-200">
      <button onClick={handlePrevious} className="flex flex-row items-center">
        <BsArrowLeftShort className="text-3xl hover:text-orange-700" />
      </button>
      <p>{currentPage}</p>
      <button onClick={handleNext} className="flex flex-row items-center">
        <BsArrowRightShort className="text-3xl hover:text-orange-700" />
      </button>
    </div>
  ) : (
    <></>
  );
}

export default MoviePage;
