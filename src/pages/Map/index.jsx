import React, { useEffect } from "react";
import { Wrap, Container, Header, List, Site, Belong, Map } from "./style";
import TestMap from "../../assets/images/testMap.png";
import Circle from "../../Components/Circle";
import Navigation from "../../Components/Nav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  const belong = {
    육군: "#258C4E",
    공군: "#3289B9",
  };

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
          <h2>김찬옥님에게 추천되는</h2>
          <h2>운동에 맞게 장소를 추천해드려요</h2>
        </Header>
        <List>
          <p>추천 체력단련장</p>
          <ul>
            <li>
              <Site>서빙고동 체력단련실</Site>
              <Belong></Belong>민간유료 / 헬스
            </li>
            <li>
              <Site>수원 체력단련장</Site>
              <Belong color={belong.공군}>공군</Belong>/ 골프(9홀)
            </li>
            <li>
              <Site>계룡 체력단련장</Site>
              <Belong color={belong.육군}>육군</Belong>/ 골프(18홀)
            </li>
          </ul>
        </List>
        <Map>
          <p>주변 체력단련장</p>
          <img src={TestMap} alt="testMap" />
        </Map>
        <Navigation />
      </Container>
    </Wrap>
  );
}
