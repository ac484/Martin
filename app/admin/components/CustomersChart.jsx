"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function CustomersChart({ items }) {
  const data = {
    labels: items?.map((item) => item?.date),
    datasets: [
      {
        label: "New Customers",
        data: items?.map((item) => item?.data?.totalUsers ?? 0),
        backgroundColor: "#10b98120",
        borderColor: "#10b98180",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "New Customers Trend",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <section className="bg-white p-5 rounded-xl shadow w-full h-[430px]">
      <Line data={data} options={options} />
    </section>
  );
} 