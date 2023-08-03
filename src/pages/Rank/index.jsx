import React, { useEffect, useState } from "react";
import {
  Wrap,
  Container,
  Header,
  StackedBarContainer,
  RankContainer,
  RankBox,
  Message,
} from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import StackedBar from "../../components/StackedBar";
// import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const [bodyScore] = useState(50);
  const [color, setColor] = useState("");

  // const navigate = useNavigate();
  // const { state } = useLocation();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);

  // 평균 신체점수에 따라 원 색 변경하는 코드
  const average = 50;
  useEffect(() => {
    if (bodyScore > average) {
      setColor("#42B77F");
    } else if (bodyScore === average) {
      setColor("#9961e6");
    } else if (bodyScore < average) {
      setColor("#B7425E");
    }
  }, [bodyScore]);

  return (
    <Wrap>
      <Circle color={color} />
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
          {bodyScore > average ? (
            <h2>홍길동님은 상위에 해당됩니다</h2>
          ) : bodyScore === average ? (
            <h2>홍길동님은 평균에 해당됩니다</h2>
          ) : bodyScore < average ? (
            <h2>홍길동님은 하위에 해당됩니다</h2>
          ) : (
            ""
          )}
        </Header>
        <StackedBarContainer>
          <StackedBar />
        </StackedBarContainer>
        <RankContainer>
          <p>현역자 랭킹</p>
          <RankBox>
            <div>
              <p className="rank one">1등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
            <div>
              <p className="rank two">2등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
            <div>
              <p className="rank three">3등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
          </RankBox>
        </RankContainer>
        <RankContainer>
          <p>명예의 전당</p>
          <RankBox>
            <div>
              <p className="rank one">1등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
            <div>
              <p className="rank two">2등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
            <div>
              <p className="rank three">3등</p>
              <div>
                <p className="text">김짜우</p>
                <p className="text">99점</p>
              </div>
            </div>
          </RankBox>
        </RankContainer>
        <Message>대한민국을 위한 노고에 감사드립니다</Message>
        <Navigation />
      </Container>
    </Wrap>
  );
}
