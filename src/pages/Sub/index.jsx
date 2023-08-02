import React, { useEffect } from "react";
import { Wrap, Container, Header, Box, Content } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  // const navigate = useNavigate();
  // const { state } = useLocation();

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
          <h1>상세정보를 보여드릴게요!</h1>
          <h2>신체점가 소폭 하락했어</h2>
          <h2>골프 등 운동을 추천 드립니다</h2>
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
        <Content>
          <p>대충 그래프</p>
        </Content>
        <Content>
          <p>기타정보추가예정</p>
        </Content>
        <Navigation />
      </Container>
    </Wrap>
  );
}
