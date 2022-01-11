import { useParams } from "react-router-dom";
import MovieContext from "../context/moviedb/MovieContext";
import { useContext, useEffect } from "react";
import { getTitle } from "../context/moviedb/MovieActions";
import noImage from "../components/assets/noimage.jpg";
import { BsCalendarWeek } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { FaImdb } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";

function ItemDetails() {
  const { title, dispatch } = useContext(MovieContext);

  const params = useParams();

  useEffect(() => {
    const getTitleData = async () => {
      const titleData = await getTitle(params.id);
      dispatch({ type: "GET_TITLE", payload: titleData });
    };

    getTitleData();
  }, []);

  const bgColour = (type) => {
    switch (type) {
      case "movie":
        return "bg-orange-700";
      case "series":
        return "bg-blue-600";
      case "game":
        return "bg-green-600";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card sm:card-side card-bordered shadow-xl w-full lg:w-8/12 mt-5">
        <figure>
          <img
            className=""
            src={title.Poster == "N/A" ? noImage : title.Poster}
            alt="item poster"
          />
        </figure>
        <div className="card-body">
          <h1 className="font-normal text-3xl mb-2">{title.Title}</h1>
          <p className="mt-1 border-t pt-2">{title.Plot}</p>
          <div className="mt-5 mb-5 flex flex-row gap-4 justify-between flex-wrap card shadow-xl p-5 border-white/30 border border-solid">
            <p className="flex flex-col justify-center items-center">
              <BsCalendarWeek className="text-3xl" />
              {title.Year}
            </p>
            <p className="flex flex-col justify-center items-center">
              <MdAttachMoney className="text-3xl" />
              {title.BoxOffice}
            </p>
            <p className="flex flex-col justify-center items-center">
              <FaImdb className="text-3xl" /> {title.imdbRating}
            </p>
            <p className="flex flex-col justify-center items-center">
              <GiPopcorn className="text-3xl" />
              {title.Metascore}
            </p>
          </div>
        </div>
        <div
          className={`${bgColour(
            title.Type
          )} absolute right-0 bottom-0 px-7 py-1 rounded-tl-lg shadow-xl`}
        >
          <p className="font-light">{title.Type}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
