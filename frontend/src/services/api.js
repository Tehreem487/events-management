import axios from "axios";

const API = axios.create({
  baseURL: "https://events-management-production.up.railway.app/api",
});

export default API;