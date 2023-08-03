import React from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);
  const success = state.success;
  return (
    <Wrap>
      <Circle color={state.color} />
      <Container>
        <Header>
          <h1>인바디 기록을</h1>
          <h1>{success}하였습니다</h1>
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
