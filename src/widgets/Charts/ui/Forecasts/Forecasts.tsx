import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {

}

export default function Forecasts({}: Props) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Прогнозы на неделю',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Рубль',
        data: [Math.random() * 100, -Math.random() * 100, Math.random() * 100, Math.random() * 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Юань',
        data: [-Math.random() * 100, Math.random() * 100, Math.random() * 100, -Math.random() * 100],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Доллар',
        data: [-Math.random() * 100, -Math.random() * 100, Math.random() * 100, Math.random() * 100],
        backgroundColor: 'rgba(246, 161, 99, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}