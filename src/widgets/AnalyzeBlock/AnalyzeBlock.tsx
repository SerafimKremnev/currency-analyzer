import Converter from "@/features/Converter/Converter";
import Block from "@/shared/ui/Block/Block";
import React from "react";
import Charts from "../Charts/Charts";
import { Segmented } from "antd";
import { IHistory, IVariants } from "@/app/page";

type Props = {
  variants: IVariants;
  values: IHistory;
};

export default function AnalyzeBlock({ variants, values }: Props) {
  return (
    <div className="flex items-center w-full flex-col gap-20">
      <Converter variants={variants} />
      <Charts values={values} />
    </div>
  );
}
