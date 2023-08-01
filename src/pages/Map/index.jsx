import React, { useEffect } from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Navigation";
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
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
          <h2>김찬옥님에게 추천되는</h2>
          <h2>운동에 맞게 장소를 추천해드려요</h2>
        </Header>
        <Navigation />
      </Container>
    </Wrap>
  );
}
