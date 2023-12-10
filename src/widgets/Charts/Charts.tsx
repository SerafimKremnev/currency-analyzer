"use client";
import React, { useState } from "react";
import Chart from "./ui/Chart/Chart";
import Block from "@/shared/ui/Block/Block";
import Forecasts from "./ui/Forecasts/Forecasts";
import { Segmented } from "antd";
import { IHistory } from "@/app/page";
import { calculateNextWeekForecast } from "@/shared/utils/calculateNextWeek";

type Props = {
  values: IHistory;
};

export default function Charts({ values }: Props) {
  const [tab, setTab] = useState("Текущий курс");
  return (
    <Block className="w-full grow">
      <Segmented
        defaultValue="Текущий курс"
        onChange={(v) => setTab(v as string)}
        options={["Текущий курс", "Прогноз"]}
        block
      />
      <div className="mt-30">
        <Chart
          values={
            tab === "Текущий курс" ? values : calculateNextWeekForecast(values)
          }
        />
      </div>
    </Block>
  );
}
