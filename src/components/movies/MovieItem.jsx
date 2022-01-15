import { BsCalendar } from "react-icons/bs";
import noImage from "../assets/noimage.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../../context/moviedb/MovieContext";

function MovieItem({ item }) {
  const { Title, Year, imdbID, Type, Poster } = item;
  const { dispatch, titlesToCompare } = useContext(MovieContext);

  const bgColour = () => {
    switch (Type) {
      case "movie":
        return "bg-orange-700/50";
      case "series":
        return "bg-blue-600/50";
      case "game":
        return "bg-green-600/50";
      default:
        return "bg-gray-400/50";
    }
  };

  const compareBgColour = (titleId) => {
    let bgClass = "bg-green-600";
    titlesToCompare.forEach((element) => {
      if (element[0] === titleId) {
        bgClass = "bg-red-600";
      }
    });
    return bgClass;
  };

  const handleCompare = async (titleId, titleName) => {
    let compareList = titlesToCompare.map((num) => num);
    let idExists = false;
    let idExistsIndex = 0;
    let isAdded = false;

    for (let index = 0; index < compareList.length; index++) {
      if (compareList[index][0] === titleId) {
        // remove title from being compared
        idExists = true;
        idExistsIndex = index;
      }
    }

    if (idExists) {
      compareList[idExistsIndex][0] = "";
      compareList[idExistsIndex][1] = "";
    } else {
      for (let addToIndex = 0; addToIndex < compareList.length; addToIndex++) {
        if (compareList[addToIndex][0] === "") {
          compareList[addToIndex][0] = titleId;
          compareList[addToIndex][1] = titleName;
          isAdded = true;
          break;
        }
      }
      let added = !isAdded
        ? window.alert("Please remove a title from compare")
        : null;
    }

    dispatch({ type: "SET_COMPARE_IDS", payload: compareList });
  };

  return (
    <div className="w-full bg-gray-700 flex flex-row rounded-lg text-neutral-200">
      <img
        src={Poster === "N/A" ? noImage : Poster}
        alt="movie poster"
        className="w-20 rounded-l-lg"
      />
      <div className="px-5 py-2 flex flex-col gap-3">
        <Link
          to={`/itemdetails/${imdbID}`}
          className="text-xl font-light hover:link"
        >
          {Title}
        </Link>
        <div className="flex flex-row gap-5 flex-wrap">
          <div className="flex flex-row items-center gap-4">
            <BsCalendar className="text-2xl " />
            {Year}
          </div>
          <h2 className={`${bgColour()} rounded-lg px-3`}>{Type}</h2>
          <button
            className={`${compareBgColour(imdbID)}  px-2 rounded-md`}
            onClick={() => handleCompare(imdbID, Title)}
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
