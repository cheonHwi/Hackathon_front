import React, { useEffect } from "react";
import { Wrap, Container, Header, ConentBox, Message } from "./style";
import Circle from "../../Components/Circle";
import Navigation from "../../Components/Nav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
          <h2>홍길동님의 평균에 해당됩니다</h2>
        </Header>
        <ConentBox>
          <p>분포 그래프</p>
        </ConentBox>
        <ConentBox>
          <p>현역자 랭킹</p>
        </ConentBox>
        <ConentBox>
          <p>명예의 전당</p>
        </ConentBox>
        <Message>대한민국을 위한 노고에 감사드립니다</Message>
        <Navigation />
      </Container>
    </Wrap>
  );
}
