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
          <h1>405</h1>
          <h1>Method Not Allowed</h1>
        </Header>
        <div className="messageContainer">
          <Message>허용되지 않는 요청이에요</Message>
          <Message>로고를 눌러 처음으로 돌아가세요</Message>
        </div>
        <Navigation error={"error"} />
      </Container>
    </Wrap>
  );
}
