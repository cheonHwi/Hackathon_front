import React, { useEffect, useRef, useState } from "react";
import { Wrap, Container, Header, SubmitBtn } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function index() {
  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [navigate, state]);
  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>인바디 결과지를</h1>
          <h1>선택해주세요</h1>
        </Header>
        <form>
          <label class="upload-button" for="file-upload">
            파일 선택하기
          </label>
          <input
            type="file"
            id="file-upload"
            name="file"
            accept=".pdf, .doc, .docx, .txt"
          ></input>
        </form>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
