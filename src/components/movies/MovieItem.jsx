import { BsCalendar } from "react-icons/bs";
import noImage from "../assets/noimage.jpg";
import { Link } from "react-router-dom";

function MovieItem({ item }) {
  const { Title, Year, imdbID, Type, Poster } = item;

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

  console.log(item);

  return (
    <div className="w-full bg-gray-700 flex flex-row rounded-lg text-neutral-200">
      <img
        src={Poster == "N/A" ? noImage : Poster}
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
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-4">
            <BsCalendar className="text-2xl " />
            {Year}
          </div>
          <h2 className={`${bgColour()} rounded-lg px-3`}>{Type}</h2>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
