import React, { useRef, useState } from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/atoms";
import { getUser } from "../../utils/localstorage";

export default function Index() {
  const [Loding, setLoding] = useState();
  const navigate = useNavigate();

  const myRef = useRef();
  const userData = getUser();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    console.log(`${typeof userData.id} : ${userData.id}`);
    formData.append("id", userData.id);
    formData.append("file_name", file.name);
    formData.append("image", file);

    axios
      .post("https://undressing.shd.one/data/upload", formData)
      .then((res) => setLoding(res.data))
      .catch((err) =>
        navigate("/ocrfinish", { state: { value: true, success: "실패" } })
      );
  };

  const { mutate, isSuccess } = useMutation("post", handleChange);

  return (
    <Wrap>
      <Circle />
      {isSuccess ? (
        Loding ? (
          navigate("/ocrfinish", { state: { value: true, success: "성공" } })
        ) : (
          <Spinner />
        )
      ) : (
        <></>
      )}
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
            onChange={mutate}
            accept=".png, .jpg"
          ></input>
        </form>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
