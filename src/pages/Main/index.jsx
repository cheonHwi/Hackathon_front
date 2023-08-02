import React, { useEffect, useState } from "react";
import {
  Wrap,
  Container,
  Header,
  LoginContainer,
  LoginLink,
  LoginArrow,
  RadarGrap,
  Diet,
  Discharge,
} from "./style";
import Arrow from "../../assets/images/arrow.png";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import Radar from "../../components/Radar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { userState } from "../../store/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const cookies = new Cookies();

export default function Index() {
  const setUserData = useSetRecoilState(userState);
  const userData = useRecoilValue(userState);
  const { state } = useLocation();
  const [tocken, setToken] = useState();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      const { access_token } = tokenResponse;
      cookies.set("token", tokenResponse.access_token);
      axios
        .post("https://soldiers.shd.one/user/getUserData", {
          token: access_token,
        })
        .then((res) => {
          const { status } = res;
          console.log(res.data);
          if (status === 200 || status === 201) {
            setUserData(res.data);
            if (status === 201) navigate("/subform");
          }
        });
    },
  });

  const bodyData = 1;

  const garaData = {
    water: 50,
    protein: 50,
    minerals: 50,
    fat: 50,
    weight: 50,
  };

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <LoginContainer>
            {userData.id ? (
              <>
                <h1>안녕하세요, {userData.name}님!</h1>
                <p>인바디 정보를 등록해주세요</p>
                <LoginLink
                  onClick={() =>
                    navigate("/ocrform", {
                      state: { value: true },
                    })
                  }
                >
                  상세 정보 등록하기 <LoginArrow src={Arrow} alt="loginArrow" />
                </LoginLink>
              </>
            ) : (
              <>
                <h1>로그인 되어있지 않아요!</h1>
                <LoginLink onClick={() => login()}>
                  로그인 <LoginArrow src={Arrow} alt="loginArrow" />
                </LoginLink>
              </>
            )}
          </LoginContainer>
        </Header>
        <RadarGrap>
          {!userData.id ? (
            !bodyData ? (
              <Radar data={garaData} />
            ) : (
              <div className="link">
                <div className="blur">
                  <Radar data={garaData} />
                </div>
                <p>오늘의 인바디 등록하기</p>
              </div>
            )
          ) : (
            <div className="blur">
              <Radar data={garaData} />
            </div>
          )}
        </RadarGrap>
        <div className="secondeContentBox">
          <Diet>diet</Diet>
          <Discharge>discharge</Discharge>
        </div>
        <Navigation rank={tocken} />
      </Container>
    </Wrap>
  );
}
