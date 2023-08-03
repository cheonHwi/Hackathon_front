import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend
);

export default function index() {
  const lineData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: " line ",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  const lineConfig = {
    type: "line",
    data: lineData,
  };

  return <Line data={lineData} options={lineConfig} />;
}
