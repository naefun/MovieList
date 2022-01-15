const movieReducer = (state, action) => {
  switch (action.type) {
    case "GET_TITLES":
      return {
        ...state,
        titles: action.payload,
        loading: false,
      };
    case "GET_TITLE":
      return {
        ...state,
        title: action.payload,
        loading: false,
      };
    case "SET_PREVIOUS_SEARCH":
      return {
        ...state,
        previousSearch: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "CLEAR_TITLES":
      return {
        ...state,
        titles: [],
      };
    case "SET_COMPARE_IDS":
      return {
        ...state,
        titlesToCompare: action.payload,
      };
    case "GET_COMPARED_TITLES":
      return {
        ...state,
        movie1: action.payload.movie1,
        movie2: action.payload.movie2,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
