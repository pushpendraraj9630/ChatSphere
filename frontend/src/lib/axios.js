import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatsphere-hewu.onrender.com/api",
  withCredentials: true,
});
