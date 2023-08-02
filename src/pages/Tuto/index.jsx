import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Wrap, TitleBox, TextBox, SlideBox, BarBox, BtnBox } from "./style";

export default function Index() {
  const [Array, setArray] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  const title = [
    "GMG에",
    "오신것을 환영합니다!",
    "신체점수를",
    "비교보세요!",
    "식단, 전역일등",
    "필요정보 전달해요!",
    "주변 체단련장",
    "알려드 수 있어요!",
    "이제 다 했어요!",
    "",
  ];

  const text = [
    "인바디 데이터를 기록하여",
    "그래프화 해드릴 수 있어요",
    "점수를 비교하 기록된정보 보며",
    "운동 대한 의지를 키워보세요",
    "군 생활에 유용할만한 정보를",
    "메인페이지서 확인보세요",
    "주변에 있는 운동 위한 장소",
    "방문해보세",
    "건강한 몸 위한 노력에 박를 드리며",
    "이제 GMG를 사용해 보세요",
  ];

  return (
    <Wrap>
      <div>
        <TitleBox>
          <h1>{title[Array]}</h1>
          <h1>{title[Array + 1]}</h1>
        </TitleBox>
        <TextBox>
          <p>{text[Array]}</p>
          <p>{text[Array + 1]}</p>
        </TextBox>
      </div>
      <div>
        <SlideBox>{Array}</SlideBox>
        <BarBox>
          <div className={Array === 0 ? "white" : "gray"}></div>
          <div className={Array === 2 ? "white" : "gray"}></div>
          <div className={Array === 4 ? "white" : "gray"}></div>
          <div className={Array === 6 ? "white" : "gray"}></div>
          <div className={Array === 8 ? "white" : "gray"}></div>
        </BarBox>
        <BtnBox>
          {Array < 8 ? (
            <button
              onClick={() => {
                setArray(Array + 2);
              }}
            >
              다음
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/main", { state: { value: true } });
              }}
            >
              시작하기
            </button>
          )}
        </BtnBox>
      </div>
    </Wrap>
  );
}
