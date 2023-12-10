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
import { IHistory } from "@/app/page";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  values: IHistory;
};

export default function Chart({ values }: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Курсы валют относительно Рубля",
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          display: false, // Скрыть метки на оси x
        },
      },
    },
  };

  const data = {
    labels: values.CNY.map((d) => d.date).reverse(),
    datasets: [
      {
        label: "Юань",
        data: values.CNY.map((d) => d.val).reverse(),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Доллар",
        data: values.USD.map((d) => d.val).reverse(),
        borderColor: "rgb(246, 161, 99)",
        backgroundColor: "rgba(246, 161, 99, 0.5)",
      },
      {
        label: "Eвро",
        data: values.EUR.map((d) => d.val).reverse(),
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
