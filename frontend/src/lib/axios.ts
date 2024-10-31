import axios from "axios";

export const api = axios.create({
  baseURL: "https://hobby-merge-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
