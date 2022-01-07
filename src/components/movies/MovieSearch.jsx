import { useState, useContext } from "react";
import MovieContext from "../../context/moviedb/MovieContext";
import { searchTitles } from "../../context/moviedb/MovieActions";

function MovieSearch() {
  const [inputText, setInputText] = useState("");

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => setInputText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputText === "") {
      console.warn("Please enter a value before submitting.");
    } else {
      const titles = await searchTitles(inputText, 1);
      dispatch({ type: "GET_TITLES", payload: titles });
      dispatch({ type: "SET_PREVIOUS_SEARCH", payload: inputText });
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      setInputText("");
    }
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR_TITLES" });
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="search"
          value={inputText}
          onChange={handleChange}
          className="rounded-lg px-5 py-2 text-black"
        />
        <div className="flex flex-row gap-2">
          <button
            type="submit"
            className="text-neutral-200 rounded-lg bg-orange-700 w-full py-1 hover:drop-shadow-lg"
          >
            Go
          </button>
          <button
            type="button"
            className="text-neutral-200 rounded-lg bg-gray-700/50 w-full py-1 hover:drop-shadow-lg"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieSearch;
