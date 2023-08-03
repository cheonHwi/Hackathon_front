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
import { physicalState } from "../../store/atoms";
import { useRecoilValue } from "recoil";

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

export default function Index() {
  const physicalInfo = useRecoilValue(physicalState);

  const radarData = {
    labels: ["체중", "골격근량", "체지방량", "체지방률", "BMI"],
    datasets: [
      {
        label: " 체성분 데이터 ",
        data: [
          physicalInfo.weight,
          physicalInfo.skeletal_muscle_mass * 3,
          physicalInfo.body_fat * 4,
          physicalInfo.body_fat_percentage * 4,
          physicalInfo.bmi * 4,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
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
