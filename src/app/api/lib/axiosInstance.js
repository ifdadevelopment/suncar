import axios from "axios";

const NODE_ENV = process.env.NODE_ENV;

const DEV_API =
  process.env.NEXT_PUBLIC_DEV_API_URL || "http://localhost:3000/api";

const PROD_API =
  process.env.NEXT_PUBLIC_PROD_API_URL || "https://sunbury-carrental.netlify.app";

const baseURL = NODE_ENV === "production" ? PROD_API : DEV_API;

console.log("NODE_ENV:", NODE_ENV);
console.log("API BASE URL:", baseURL);

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default axiosInstance;
