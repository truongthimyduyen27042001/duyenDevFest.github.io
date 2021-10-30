import axios from "axios";
export const authApi = axios.create({
  baseURL: "https://60dc2b83c2b6280017feb762.mockapi.io/todolist",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "",
  },
});
