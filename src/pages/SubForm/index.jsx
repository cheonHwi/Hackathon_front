import React, { useEffect, useRef, useState } from "react";
import { Wrap, Container, Header, Label, SubmitBtn } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const date = new Date();

export default function Index() {
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, handleSubmit } = useForm();

  let check = useRef(false);

  const year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  if (month < 10) {
    month = "0" + month;
  }
  let day = String(date.getDate());
  if (day < 10) {
    day = "0" + day;
  }
  const defaultDay = year + "-" + month + "-" + day;

  const unit = [
    7296, 5861, 6685, 2136, 1862, 3007, 2621, 2291, 5021, 3296, 6176, 1575,
    7652, 1570, 7162, 1968, 3182, 5397, 6335, 3389, 2171, 8623, 1691, 5322,
    9030, 6282, 8902, 7369,
  ];

  const onSubmit = async (data) => {
    console.log(data);
    // if (!check.current) {
    //   check.current = false;
    //   await axios.post("url").then(res);
    //   if (sendResult.status === 200) {
    //     navigate("/main", { state: { value: true } });
    //   } else {
    //     setIsDisabled(true);
    //     check.current = false;
    //   }
    // }
  };

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
          <h1>김찬옥님의 정보를</h1>
          <h1>알려주세요</h1>
        </Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <p>소속</p>
            <select name="unit" {...register("unit")}>
              <option value="육군">육군</option>
              <option value="해군">해군</option>
              <option value="공군">공군</option>
              <option value="해병대">해병대</option>
            </select>
          </Label>
          <Label>
            <p>부대</p>
            <select name="belong" {...register("belong")}>
              <option value="0">리스트에 없는 부대</option>
              {unit.map((index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={index}>{index}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </Label>
          <Label>
            <p>입대일</p>
            <input
              type="date"
              name="date"
              defaultValue={defaultDay}
              {...register("date")}
            />
          </Label>
          <label>
            <SubmitBtn type="submit" value="등록하기" disabled={isDisabled} />
          </label>
        </form>
        <Navigation check={"check"} />
      </Container>
    </Wrap>
  );
}
