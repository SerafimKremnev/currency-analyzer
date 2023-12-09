"use client";
import Block from "@/shared/ui/Block/Block";
import {
  AreaChartOutlined,
  BarChartOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: <Link href={"/"}>Анализ валют</Link>,
    key: "analyze",
    icon: <BarChartOutlined />,
  },
  {
    label: <Link href={"/news"}>Новости</Link>,
    key: "news",
    icon: <NumberOutlined />,
  },
];

export default function Header() {
  const current = usePathname().split("/")[1] || "analyze";

  return (
    <header className="rounded p-0 m-0 md-max:mb-20">
      <Menu
        className="rounded"
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </header>
  );
}
