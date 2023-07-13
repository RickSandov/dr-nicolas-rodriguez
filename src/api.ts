import axios from "axios";

export const api = axios.create({
  baseURL: "/api/admin",
});
export const apiLogin = axios.create({
  baseURL: "/api",
});
