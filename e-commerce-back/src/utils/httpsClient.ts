// src/utils/httpsClient.ts
import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: true,
});

const httpsClient = axios.create({
  baseURL: "https://accept.paymobsolutions.com/api",
  httpsAgent,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpsClient;
