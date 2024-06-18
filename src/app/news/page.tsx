import NewsList from "@/widgets/NewsList/NewsList";
import React from "react";
import { news } from "@/shared/data/news";

type Props = {};

async function getData(id: number) {
  return news;
}

export default function page({}: Props) {
  return (
    <div className="h-full relative max-w-[720px] m-auto">
      <NewsList />
    </div>
  );
}
