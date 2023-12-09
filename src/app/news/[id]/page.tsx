import NewPreview from "@/features/NewPreview/NewPreview";
import { axiosInstance } from "@/shared/api/axios";
import { INews } from "@/widgets/NewsList/api/getNews";
import React from "react";

type Props = {
  params: Params;
};

type Params = {
  id: number;
};

async function getData(id: number) {
  const { data } = await axiosInstance<INews>(`/news/${id}`);
  return data;
}

export async function generateMetadata({ params }: Props) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function Page({ params }: Props) {
  const article = await getData(params.id);
  return (
    <div className="h-full relative max-w-[720px] m-auto md-max:mb-20">
      <NewPreview isOverflow article={article} />
    </div>
  );
}
