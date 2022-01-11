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
    default:
      return state;
  }
};

export default movieReducer;
