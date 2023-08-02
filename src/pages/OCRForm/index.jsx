import React, { useRef } from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/atoms";

export default function Index() {
  const myRef = useRef();
  const userData = useRecoilValue(userState);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("id", userData.id);
    formData.append("file_name", file.name);
    formData.append("image", file);

    axios
      .post("http://localhost:5000/data/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>인바디 결과지를</h1>
          <h1>선택해주세요</h1>
        </Header>
        <form>
          <label className="upload-button" htmlFor="file-upload">
            파일 선택하기
          </label>
          <input
            type="file"
            id="file-upload"
            name="file"
            onChange={handleChange}
            accept=".png, .jpg"
          ></input>
        </form>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
