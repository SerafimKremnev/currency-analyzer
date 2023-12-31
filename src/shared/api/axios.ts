import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})