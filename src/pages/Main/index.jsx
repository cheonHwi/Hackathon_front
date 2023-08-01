import React, { useEffect } from "react";
import { Wrap, Container } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Navigation";
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
      <Circle />
      <Container>
        <Navigation />
      </Container>
    </Wrap>
  );
}
