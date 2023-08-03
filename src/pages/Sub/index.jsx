import React, { useEffect, useState } from "react";
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
import Radar from "../../components/SubRadar";
import { physicalState } from "../../store/atoms";
import { useLocation, useNavigate } from "react-router-dom";
import { userState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";

export default function Index() {
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);
  const userInfo = useRecoilValue(userState);
  const physicalInfo = useRecoilValue(physicalState);

  const [lastBodyData, setLastBodyData] = useState(0);
  useEffect(() => {
    axios
      .post("https://undressing.shd.one/data/getLineData", { id: userInfo.id })
      .then(({ data }) => {
        setLastBodyData(data[3].inbody_score);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo.id]);

  useEffect(() => {
    if (state.inbodyScore > lastBodyData) {
      setColor("#42B77F");
    } else if (state.inbodyScore === lastBodyData) {
      setColor("#9961e6");
    } else if (state.inbodyScore < lastBodyData) {
      setColor("#B7425E");
    }
  }, [state.inbodyScore, lastBodyData]);

  return (
    <Wrap>
      <Circle color={color} />
      <Container>
        <Header>
          <h1>상세정보를 보여드릴게요!</h1>
          {state.inbodyScore > lastBodyData ? (
            <h2>신체점수가 상승 했어요</h2>
          ) : state.inbodyScore === lastBodyData ? (
            <h2>신체점수가 전과 같아요</h2>
          ) : state.inbodyScore < lastBodyData ? (
            <h2>신체점수가 하락 했어요</h2>
          ) : (
            ""
          )}
        </Header>
        <div className="boxContainer">
          <Box>
            <p>체중</p>
            <h3>{physicalInfo.weight}kg</h3>
            <div></div>
          </Box>
          <Box>
            <p>골력근량</p>
            <h3>{physicalInfo.skeletal_muscle_mass}kg</h3>
            <div></div>
          </Box>
          <Box>
            <p>체지방량</p>
            <h3>{physicalInfo.body_fat}kg</h3>
            <div></div>
          </Box>
        </div>
        <div className="contentBox">
          <ContentLine>
            <Line />
          </ContentLine>
          <ContentRadar>
            <Radar />
          </ContentRadar>
        </div>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
