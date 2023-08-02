import React, { useEffect } from "react";
import { Wrap, Container, Header, Message } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);
  return (
    <Wrap>
      <Circle color={"#B74242"} />
      <Container>
        <Header>
          <h1>403</h1>
          <h1>Forbidden</h1>
        </Header>
        <div className="messageContainer">
          <Message>접근이 금지된 페이지에요</Message>
          <Message>로고를 눌러 처음으로 돌아가세요</Message>
        </div>
        <Navigation error={"error"} />
      </Container>
    </Wrap>
  );
}
