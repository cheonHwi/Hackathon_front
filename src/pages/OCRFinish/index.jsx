import React from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);
  const props = "완료";
  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>인바디 기록을</h1>
          <h1>{props}하였습니다</h1>
        </Header>
        <button
          onClick={() => {
            navigate("/main", { state: { value: true } });
          }}
        >
          돌아가기
        </button>
      </Container>
    </Wrap>
  );
}
