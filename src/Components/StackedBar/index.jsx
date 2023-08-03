import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { avgState } from "../../store/atoms";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Index() {
  const setAvgInfo = useSetRecoilState(avgState);
  const [nameArray, setNameArray] = useState(["-", "-", "-", "-", "-"]);
  const [scoreArray, setScoreArray] = useState([65, 59, 80, 81, 56, 60]);

  useEffect(() => {
    axios
      .get("https://undressing.shd.one/data/variation")
      .then(({ data }) => {
        const { dataArray, avg } = data;
        setAvgInfo(avg);
        const slicedArray = dataArray;

        setNameArray(slicedArray.map((obj) => obj.range));
        setScoreArray(slicedArray.map((obj) => obj.count));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const StackerData = {
    labels: nameArray,
    datasets: [
      {
        label: " 분포 그래프 ",
        data: scoreArray,
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
