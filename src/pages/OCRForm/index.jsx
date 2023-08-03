import React, { useState } from "react";
import { Wrap, Container, Header } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { physicalState, userState } from "../../store/atoms";
import { useEffect } from "react";

export default function Index() {
  const setPhysicalInfo = useSetRecoilState(physicalState);
  const userInfo = useRecoilValue(userState);
  const [Loding, setLoding] = useState();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("id", userInfo.id);
    formData.append("file_name", file.name);
    formData.append("image", file);

    axios
      .post("https://undressing.shd.one/data/upload", formData)
      .then((res) => {
        setPhysicalInfo(res.data);
        setLoding(res.data);
      })
      .catch((err) =>
        navigate("/ocrfinish", {
          state: { value: true, success: "실패", color: "#B74242" },
        })
      );
  };

  const { mutate, isSuccess } = useMutation("post", handleChange);

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

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
