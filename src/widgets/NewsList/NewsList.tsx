import NewPreview from "@/features/NewPreview/NewPreview";
import { news } from "@/shared/data/news";
import React from "react";

type Props = {
  isMin?: boolean;
};

export const revalidate = 60;

export default async function NewsList({ isMin }: Props) {
  return (
    <div className="overflow-auto absolute grid gap-20 left-0 right-0 top-0 bottom-0 md-max:overflow-visible">
      {(isMin ? news.slice(0, 3) : news).reverse().map((el, i) => (
        <NewPreview key={el.id} article={el} />
      ))}
    </div>
  );
}
