import React, { useEffect } from "react";
import { Wrap, Container, Header, ConentBox, Message } from "./style";
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
          <h2>홍길동님의 평균에 해당됩니다</h2>
        </Header>
        <ConentBox>대충 그래프</ConentBox>
        <ConentBox>대충 현역자 랭킹</ConentBox>
        <ConentBox>대충 명예의 전당</ConentBox>
        <Message>대한민국을 위한 노고에 감사드립니다</Message>
        <Navigation />
      </Container>
    </Wrap>
  );
}
