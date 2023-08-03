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
import { Radar } from "react-chartjs-2";

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

export default function index(props) {
  const radarData = {
    labels: ["체수분", "단백질", "무기질", "체지방", "체중"],
    datasets: [
      {
        label: " 체성분 5종 ",
        data: [
          props.data.water,
          props.data.protein,
          props.data.minerals,
          props.data.fat,
          props.data.weight,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 40,
      },
    },
  };
  return (
    <Radar
      data={radarData}
      options={options}
      style={{
        width: "100%",
        height: "90%",
      }}
    />
  );
}
