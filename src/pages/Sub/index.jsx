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
import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";

export default function Index() {
  const [color, setColor] = useState("");
  const physicalInfo = useRecoilValue(physicalState);
  const { state } = useLocation();

  // const navigate = useNavigate();
  // const { state } = useLocation();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);

  const garaData1 = {
    water: 50,
    protein: 40,
    minerals: 30,
    fat: 10,
    weight: 60,
  };

  const garaData2 = {
    water: 32,
    protein: 23,
    minerals: 54,
    fat: 12,
    weight: 65,
  };

  // 이전 인바디 점수 가져오기
  const lastBodyData = 90;
  useEffect(() => {
    if (state.inbodyScore > lastBodyData) {
      setColor("#42B77F");
    } else if (state.inbodyScore === lastBodyData) {
      setColor("#9961e6");
    } else if (state.inbodyScore < lastBodyData) {
      setColor("#B7425E");
    }
  }, [state.inbodyScore]);

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
          {/* <h2>골프 등 운동을 추천 드립니다</h2> */}
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
            <Line data={garaData1} />
          </ContentLine>
          <ContentRadar>
            <Radar data1={garaData1} data2={garaData2} />
          </ContentRadar>
        </div>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
