import { createContext, useReducer } from "react";
import movieReducer from "./MovieReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    titles: [],
    loading: false,
    previousSearch: "",
    currentPage: 1,
    title: [],
    titlesToCompare: [
      ["", ""],
      ["", ""],
    ],
    compareInfo: [],
    movie1: [],
    movie2: [],
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
