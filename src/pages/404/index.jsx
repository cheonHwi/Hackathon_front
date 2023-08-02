import React from "react";
import { Wrap, Container, Header, Message } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";

export default function index() {
  return (
    <Wrap>
      <Circle color={"#B74242"} />
      <Container>
        <Header>
          <h1>404</h1>
          <h1>NotFound</h1>
        </Header>
        <div className="messageContainer">
          <Message>페이지를 찾을 수 없어요</Message>
          <Message>로고를 눌러 처음으로 돌아가세요</Message>
        </div>
        <Navigation error={"error"} />
      </Container>
    </Wrap>
  );
}
