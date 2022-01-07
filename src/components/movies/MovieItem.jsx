import { BsCalendar } from "react-icons/bs";

function MovieItem({ item }) {
  const { Title, Year, imdbID, Type, Poster } = item;

  const bgColour = () => {
    switch (Type) {
      case "movie":
        return "bg-green-600/20";
      case "series":
        return "bg-blue-400/20";
      case "game":
        return "bg-yellow-400/20";
      default:
        return "bg-gray-200/20";
    }
  };

  return (
    <div className="w-full bg-gray-700 flex flex-row rounded-lg text-neutral-200">
      <img src={Poster} alt="movie poster" className="w-20 rounded-l-lg" />
      <div className="px-5 py-2 flex flex-col gap-3">
        <h1 className="text-xl font-medium">{Title}</h1>
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
