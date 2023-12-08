import NewsList from "@/widgets/NewsList/NewsList";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-full relative max-w-[720px] m-auto">
      <NewsList />
    </div>
  );
}
