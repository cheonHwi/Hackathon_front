import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { userState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
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

// api 서버 수정하고 다시 작성하겟음.
export default function Index() {
  const userInfo = useRecoilValue(userState);
  const nameArray = ["-", "-", "-", "-", "-"];
  const [jsonArray, setJsonArray] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    axios
      .post("https://undressing.shd.one/data/getLineData", { id: userInfo.id })
      .then(({ data }) => {
        setJsonArray(data.map((obj) => obj.inbody_score));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo.id]);

  const lineData = {
    labels: nameArray,
    datasets: [
      {
        label: " 신체점수 ",
        data: jsonArray,
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
