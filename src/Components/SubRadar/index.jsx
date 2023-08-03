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
        label: " 이전 데이터 ",
        data: [
          props.data1.water,
          props.data1.protein,
          props.data1.minerals,
          props.data1.fat,
          props.data1.weight,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: " 최신 데이터 ",
        data: [
          props.data2.water,
          props.data2.protein,
          props.data2.minerals,
          props.data2.fat,
          props.data2.weight,
        ],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(75, 192, 192)",
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
        // suggestedMax: 80,
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
