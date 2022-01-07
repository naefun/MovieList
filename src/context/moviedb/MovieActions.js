import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;

const movieapi = axios.create({
  baseURL: API_URL,
  headers: {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  },
});

export const searchTitles = async (title, page) => {
  const params = new URLSearchParams({
    s: title,
    page: page,
  });

  const response = await movieapi.get(`/?${params}`);

  return response.data.Search;
};
