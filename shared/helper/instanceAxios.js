import axios from "axios";
import { baseURL } from "../constant/baseURL";

export const instanceAxios = axios.create({
  baseURL,
  params: {
    apiKey: "a407a7b3",
  },
});
