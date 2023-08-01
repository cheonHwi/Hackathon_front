import React, { useEffect } from "react";
import { Wrap, Logo } from "./style";
import MainLogo from "../../assets/images/logo.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    // axios
    //   .post("url")
    //   .then((res) => {
    //     if (res) {
    // setTimeout(() => {
    //   navigate("/main", { state: { value: true } });
    // }, 500);
    //   } else {
    setTimeout(() => {
      navigate("/tutorial", { state: { value: true } });
    }, 500);
    // }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  });
  return (
    <Wrap>
      <Logo src={MainLogo} alt="mainLogo" />
    </Wrap>
  );
}
