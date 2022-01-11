import { useContext } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { searchTitles } from "../../context/moviedb/MovieActions";
import MovieContext from "../../context/moviedb/MovieContext";

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
    if (titles.Search.length < 10) {
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

  const handleSpecific = async (page) => {
    const titles = await searchTitles(previousSearch, page);
    dispatch({ type: "GET_TITLES", payload: titles });
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  const totalPagesList = () => {
    let pages = Math.ceil(titles.totalResults / 10);
    let pagesList = [];
    for (let index = 1; index <= pages; index++) {
      pagesList.push(index);
    }
    return pagesList;
  };

  const pageNum = (page) => {
    return (
      <p
        className={`cursor-pointer hover:text-orange-700 ${
          page === currentPage && "text-orange-700"
        }`}
        key={page}
        onClick={() => handleSpecific(page)}
      >
        {page}
      </p>
    );
  };

  const pagesShown = 7;
  const pagesShownHalf = Math.floor(pagesShown / 2);
  const totalPagesNum = totalPagesList()[totalPagesList().length - 1];

  return titles.Search.length > 0 ? (
    <div className="flex flex-row gap-5 w-full justify-center mt-5 text-neutral-200">
      <button onClick={handlePrevious} className="flex flex-row items-center">
        <BsArrowLeftShort className="text-3xl hover:text-orange-700" />
      </button>

      {totalPagesList().map((page) =>
        currentPage - pagesShownHalf > 0 &&
        totalPagesList().length > pagesShown &&
        currentPage + pagesShownHalf <= totalPagesNum
          ? page >= currentPage - pagesShownHalf &&
            page <= currentPage + pagesShownHalf
            ? pageNum(page)
            : null
          : currentPage <= pagesShown && page <= pagesShown
          ? pageNum(page)
          : currentPage + pagesShownHalf >= totalPagesNum &&
            page >= totalPagesNum - (pagesShown - 1)
          ? pageNum(page)
          : null
      )}
      <button onClick={handleNext} className="flex flex-row items-center">
        <BsArrowRightShort className="text-3xl hover:text-orange-700" />
      </button>
    </div>
  ) : (
    <></>
  );
}

export default MoviePage;
