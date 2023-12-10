import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { currencyNextDays } from "@/shared/data/currency";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
type Props = {};

export default function Forecasts({}: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Прогнозы на неделю",
      },
    },
  };

  const data = {
    labels: currencyNextDays.dates,
    datasets: [
      {
        label: "Евро",
        data: currencyNextDays.CNY,
        borderColor: "rgb(92, 92, 199)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Юань",
        data: currencyNextDays.CNY,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Доллар",
        data: currencyNextDays.USD,
        borderColor: "rgb(246, 161, 99)",
        backgroundColor: "rgba(246, 161, 99, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
