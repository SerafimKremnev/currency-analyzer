import NewPreview from "@/features/NewPreview/NewPreview";
import React from "react";
import { getNews } from "./api/getNews";

type Props = {};

export const revalidate = 60;

export default async function NewsList({}: Props) {
  const news = await getNews();
  return (
    <div className="overflow-auto absolute grid gap-20 left-0 right-0 top-0 bottom-0 md-max:overflow-visible">
      {news.slice(0, 3).map((el, i) => (
        <NewPreview key={el.id} article={el} />
      ))}
    </div>
  );
}
