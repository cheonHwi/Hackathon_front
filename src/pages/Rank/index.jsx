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
import { physicalState, userState, avgState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const userInfo = useRecoilValue(userState);
  const average = useRecoilValue(avgState);
  const [color, setColor] = useState("");
  const [rankData, setRankData] = useState([
    { name: "-", max_inbody_score: "--" },
    { name: "-", max_inbody_score: "--" },
    { name: "-", max_inbody_score: "--" },
  ]);
  const physicalInfo = useRecoilValue(physicalState);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);
  useEffect(() => {
    axios
      .get("https://undressing.shd.one/data/rank")
      .then(({ data }) => {
        setRankData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (physicalInfo.inbody_score > average) {
      setColor("#42B77F");
    } else if (physicalInfo.inbody_score === average) {
      setColor("#9961e6");
    } else if (physicalInfo.inbody_score < average) {
      setColor("#B7425E");
    }
  }, [physicalInfo.inbody_score, average]);

  return (
    <Wrap>
      <Circle color={color} />
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
          {physicalInfo.inbody_score > average ? (
            <h2>{userInfo.name}님은 상위에 해당됩니다</h2>
          ) : physicalInfo.inbody_score === average ? (
            <h2>{userInfo.name}님은 평균에 해당됩니다</h2>
          ) : physicalInfo.inbody_score < average ? (
            <h2>{userInfo.name}님은 하위에 해당됩니다</h2>
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
                <p className="text">{rankData[0].name}</p>
                <p className="text">{rankData[0].max_inbody_score}점</p>
              </div>
            </div>
            <div>
              <p className="rank two">2등</p>
              <div>
                <p className="text">{rankData[1].name}</p>
                <p className="text">{rankData[1].max_inbody_score}점</p>
              </div>
            </div>
            <div>
              <p className="rank three">3등</p>
              <div>
                <p className="text">{rankData[2].name}</p>
                <p className="text">{rankData[2].max_inbody_score}점</p>
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
                <p className="text">{rankData[0].name}</p>
                <p className="text">{rankData[0].max_inbody_score}점</p>
              </div>
            </div>
            <div>
              <p className="rank two">2등</p>
              <div>
                <p className="text">{rankData[1].name}</p>
                <p className="text">{rankData[1].max_inbody_score}점</p>
              </div>
            </div>
            <div>
              <p className="rank three">3등</p>
              <div>
                <p className="text">{rankData[2].name}</p>
                <p className="text">{rankData[2].max_inbody_score}점</p>
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
