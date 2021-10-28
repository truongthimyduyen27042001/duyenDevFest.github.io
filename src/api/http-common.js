import axios from "axios";

export default axios.create({
  baseURL: "https://e-con.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
