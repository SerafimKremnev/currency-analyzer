"use client";
import Block from "@/shared/ui/Block/Block";
import { Typography } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  title: string;
  href: string;
  previewText: string;
  fullText?: string;
  isOverflow?: boolean;
};

export default function NewPreview({
  image,
  title,
  href,
  isOverflow,
  previewText,
  fullText,
}: Props) {
  return (
    <Link href={href}>
      <Block
        className={clsx(
          isOverflow && "overflow-auto absolute left-0 right-0 bottom-0 top-0"
        )}
      >
        <Typography.Title className="mb-16" level={2}>
          {title}
        </Typography.Title>
        <Image
          className="object-cover mb-16 w-full h-[280px]"
          alt=""
          src={image}
          width={300}
          height={280}
        />
        <Typography.Paragraph className="!text-gray-400">
          {previewText}
        </Typography.Paragraph>
        {fullText && (
          <div
            dangerouslySetInnerHTML={{ __html: fullText }}
            className="mt-30"
          ></div>
        )}
      </Block>
    </Link>
  );
}
