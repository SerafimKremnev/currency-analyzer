import NewPreview from "@/features/NewPreview/NewPreview";

import React from "react";
import { INews } from "./api/getNews";
import { axiosInstance } from "@/shared/api/axios";

type Props = {
  isMin?: boolean;
};

export const revalidate = 60;

async function getData() {
  const { data } = await axiosInstance<INews[]>(`/news/`);
  return data;
}

export default async function NewsList({ isMin }: Props) {
  const news = await getData();
  return (
    <div className="overflow-auto absolute grid gap-20 left-0 right-0 top-0 bottom-0 md-max:overflow-visible">
      {(isMin ? news.slice(0, 3) : news).reverse().map((el, i) => (
        <NewPreview key={el.id} article={el} />
      ))}
    </div>
  );
}
