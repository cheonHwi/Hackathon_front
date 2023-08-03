import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function index() {
  const StackerData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: " 분포 그래프 ",
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  const config = {
    type: "Bar",
    data: StackerData,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Chart.js Stacked Line/Bar Chart",
        },
      },
      scales: {
        y: {
          stacked: true,
        },
      },
    },
  };

  return (
    <Bar
      data={StackerData}
      config={config}
      style={{
        width: "100%",
        height: "90%",
      }}
    />
  );
}
