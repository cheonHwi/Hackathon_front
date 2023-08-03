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
  const std_weight = (props.data.height * props.data.height * 22) / 10000;
  const std_skeletal = (props.data.height - 100) * 0.9 * 0.45;
  const std_bodyfat = Math.abs(
    (((1.2 * props.data.weight) / props.data.height) ^ 2) +
      0.23 * props.data.ages -
      16.2
  );
  const std_bodyfatPerc =
    1.1 * props.data.weight - 128 * (props.data.weight / props.data.height);

  const radarData = {
    labels: ["체중", "골격근량", "체지방량", "체지방률", "BMI"],
    datasets: [
      {
        label: " 내 데이터 ",
        data: [
          props.data.weight,
          props.data.skeletal_muscle_mass * 3,
          props.data.fat * 4,
          props.data.body_fat_percentage * 4,
          props.data.bmi * 4,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
      },
      {
        label: " 표준 수치 ",
        data: [
          std_weight,
          std_skeletal * 3,
          std_bodyfat * 4,
          std_bodyfatPerc * 4,
          20.7 * 4,
        ],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const options = {
    legend: { display: false },
    events: [],
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 80,
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
