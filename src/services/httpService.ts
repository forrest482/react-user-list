/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { setupInterceptorsTo } from "./Interceptors";

setupInterceptorsTo(axios);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
