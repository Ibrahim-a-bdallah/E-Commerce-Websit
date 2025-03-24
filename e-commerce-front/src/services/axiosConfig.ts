import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // تأكد من أن الرابط صحيح
  headers: {
    "Content-Type": "application/json",
  },
});
