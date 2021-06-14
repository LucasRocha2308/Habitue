import axios from "axios";

const token = localStorage.getItem("@Habitue:token");

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com/",
  headers: {
    Authorization: "Bearer " + token,
  },
});
export default api;
