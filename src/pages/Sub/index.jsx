import React, { useEffect } from "react";
import {
  Wrap,
  Container,
  Header,
  Box,
  ContentLine,
  ContentRadar,
} from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import Line from "../../components/Line";
import Radar from "../../components/Radar";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  // const navigate = useNavigate();
  // const { state } = useLocation();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);

  const garaData = {
    water: 50,
    protein: 50,
    minerals: 50,
    fat: 50,
    weight: 50,
  };

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>상세정보를 보여드릴게요!</h1>
          <h2>신체점가 소폭 하락했어요</h2>
          {/* <h2>골프 등 운동을 추천 드립니다</h2> */}
        </Header>
        <div className="boxContainer">
          <Box>
            <p>체중</p>
            <h3>59.0kg</h3>
            <div></div>
          </Box>
          <Box>
            <p>골력근량</p>
            <h3>59.0kg</h3>
            <div></div>
          </Box>
          <Box>
            <p>체지방량</p>
            <h3>519.0kg</h3>
            <div></div>
          </Box>
        </div>
        <div className="contentBox">
          <ContentLine>
            <Line />
          </ContentLine>
          <ContentRadar>
            <Radar data={garaData} />
          </ContentRadar>
        </div>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
