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

  return response.data;
};

export const getTitle = async (id) => {
  const params = new URLSearchParams({
    i: id,
    r: "json",
  });

  const response = await movieapi.get(`/?${params}`);

  return response.data;
};

export const getComparedTitles = async (id1, id2) => {
  const params1 = new URLSearchParams({
    i: id1,
    r: "json",
  });
  const params2 = new URLSearchParams({
    i: id2,
    r: "json",
  });

  const [info1, info2] = await Promise.all([
    movieapi.get(`/?${params1}`),
    movieapi.get(`/?${params2}`),
  ]);

  return { movie1: info1.data, movie2: info2.data };
};
