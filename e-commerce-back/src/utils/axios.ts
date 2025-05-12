import axios from "axios";

export const paymobAPI = axios.create({
  baseURL: "https://accept.paymob.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional: max 10 seconds per request
});
