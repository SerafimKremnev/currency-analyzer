"use client";
import Block from "@/shared/ui/Block/Block";
import { INews } from "@/widgets/NewsList/api/getNews";
import { Typography } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  article: INews;
  isOverflow?: boolean;
};

export default function NewPreview({ article, isOverflow }: Props) {
  return isOverflow ? (
    <Block
      className={clsx(
        isOverflow &&
          "overflow-auto absolute left-0 right-0 bottom-0 top-0 md-max:relative"
      )}
    >
      <Typography.Title className="mb-16" level={2}>
        {article.title}
      </Typography.Title>
      {article.image && (
        <Image
          className="object-cover mb-16 w-full h-[280px]"
          alt=""
          src={article.image}
          width={300}
          height={280}
        />
      )}
      <Typography.Paragraph className="!text-gray-400 md-max:!text-2xl">
        {article.description}
      </Typography.Paragraph>
      {article.content && isOverflow && (
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="mt-30 [&>ul]:list-disc [&>ul]:ml-20 [&>ul>li]:!mb-10"
        ></div>
      )}
      <div className="mt-10 text-right text-gray-400">Источник: РБК</div>
    </Block>
  ) : (
    <Link href={`/news/${article.id}`}>
      <Block
        className={clsx(
          isOverflow && "overflow-auto absolute left-0 right-0 bottom-0 top-0"
        )}
      >
        <Typography.Title className="mb-16 md-max:!text-2xl" level={2}>
          {article.title}
        </Typography.Title>
        {article.image && (
          <Image
            className="object-cover mb-16 w-full h-[280px] sm-max:h-[180px]"
            alt=""
            src={article.image}
            width={300}
            height={280}
          />
        )}
        <Typography.Paragraph className="!text-gray-400 sm-max:!text-14">
          {article.description}
        </Typography.Paragraph>
        {article.content && isOverflow && (
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="mt-30 list-disc [*>ul]:ml-20"
          ></div>
        )}
      </Block>
    </Link>
  );
}
