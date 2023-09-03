import { instanceAxios } from "../shared/helper/instanceAxios";

export const getMovies = () =>
  instanceAxios({ method: "GET", params: { s: "movie", t: "a", limit: 25 } });

export const getMovieId = (id) =>
  instanceAxios({ method: "GET", params: { i: id } });
