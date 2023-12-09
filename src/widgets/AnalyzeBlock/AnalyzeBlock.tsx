import Converter from "@/features/Converter/Converter";
import Block from "@/shared/ui/Block/Block";
import React from "react";
import Charts from "../Charts/Charts";
import { Segmented } from "antd";

type Props = {};

export default function AnalyzeBlock({}: Props) {
  return (
    <div className="flex items-center w-full flex-col gap-20">
      <Converter />
      <Charts />
    </div>
  );
}
