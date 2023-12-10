import NewsList from "@/widgets/NewsList/NewsList";
import React from "react";
import { axiosInstance } from "@/shared/api/axios";
import { INews } from "@/widgets/NewsList/api/getNews";

type Props = {};

async function getData(id: number) {
  const { data } = await axiosInstance<INews>(`/news/${id}`);
  return data;
}

export default function page({}: Props) {
  return (
    <div className="h-full relative max-w-[720px] m-auto">
      <NewsList />
    </div>
  );
}
