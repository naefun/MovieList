import { useContext } from "react";
import MovieContext from "../../context/moviedb/MovieContext";
import { IoIosRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function CompareTool() {
  const { titlesToCompare, dispatch } = useContext(MovieContext);

  const checkThereAreTitles = () => {
    let titlesExist = false;
    for (let index = 0; index < titlesToCompare.length; index++) {
      if (titlesToCompare[index][0] !== "") {
        titlesExist = true;
      }
    }
    return titlesExist;
  };
  const checkThereAreBothTitles = () => {
    let bothTitlesExist = true;
    for (let index = 0; index < titlesToCompare.length; index++) {
      if (titlesToCompare[index][0] === "") {
        bothTitlesExist = false;
      }
    }
    return bothTitlesExist;
  };

  const removeItem = (index) => {
    let titlesList = titlesToCompare.map((id) => id);

    titlesList[index][0] = "";
    titlesList[index][1] = "";

    dispatch({ type: "SET_COMPARE_IDS", payload: titlesList });
  };

  if (checkThereAreTitles()) {
    return (
      <div className="mt-5 shadow-lg p-3 bg-gray-700 rounded-lg">
        <h1 className="">Compare titles</h1>
        <div className="flex flex-row gap-3 flex-wrap">
          {titlesToCompare[0][0] !== "" && (
            <div className="flex flex-row items-center">
              <button onClick={() => removeItem(0)}>
                <IoIosRemoveCircle className="" />
              </button>
              {titlesToCompare[0][1]}
            </div>
          )}

          {titlesToCompare[1][0] !== "" && (
            <div className="flex flex-row items-center">
              <button onClick={() => removeItem(1)}>
                <IoIosRemoveCircle className="" />
              </button>
              {titlesToCompare[1][1]}
            </div>
          )}
          {checkThereAreBothTitles() && (
            <Link to="/compareitems" className="bg-gray-600/50 px-3 rounded-md">
              Compare
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5 shadow-lg p-3 bg-gray-700 rounded-lg">
        Add titles to compare
      </div>
    );
  }
}

export default CompareTool;
