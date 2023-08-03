import React, { useEffect } from "react";
import { Wrap, Logo } from "./style";
import MainLogo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/tuto", { state: { value: true } });
    }, 500);
  });
  return (
    <Wrap>
      <Logo src={MainLogo} alt="mainLogo" />
    </Wrap>
  );
}
