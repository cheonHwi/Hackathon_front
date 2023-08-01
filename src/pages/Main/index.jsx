import React, { useEffect } from "react";
import { Wrap, Container, Circle } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  return (
    <Wrap>
      <Circle />
      <Container>asdasdasd</Container>
    </Wrap>
  );
}
