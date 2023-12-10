import { axiosInstance } from "@/shared/api/axios"
import { news } from "@/shared/data/news"
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
    return news
  } catch (e) {
    console.error(e)
    return news
  }
}