import axios from "axios";

export const api = axios.create({
  // baseURL: "https://hobby-merge-1.onrender.com",
  baseURL: "https://localhost:3030",
  headers: {
    "Content-Type": "application/json",
  },
});
