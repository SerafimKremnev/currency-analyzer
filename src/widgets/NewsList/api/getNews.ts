import { axiosInstance } from "@/shared/api/axios"
import axios from "axios"

export interface INews {
  "id": number,
  "title": string,
  "description": string,
  "image": string,
  "content": string,
  "createdAt": string,
  "updatedAt": string
}

export async function getNews() {
  try {
    const res = await axiosInstance<INews[]>('/news')
    return res.data
  } catch (e) {
    console.error(e)
    return []
  }
}