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
import ArrowBlack from "../../assets/images/arrowblack.png";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import Radar from "../../components/Radar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { userState } from "../../store/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setCookie } from "../../utils/cookies";
import jwtDecode from "jwt-decode";
import { getUser } from "../../utils/localstorage";

const cookies = new Cookies();

export default function Index() {
  const setUserData = useSetRecoilState(userState);
  const userData = useRecoilValue(userState);
  const { state } = useLocation();
  const [tocken] = useState();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      const { access_token } = tokenResponse;
      cookies.set("token", tokenResponse.access_token);
      axios
        .post(
          "https://undressing.shd.one/user/login",
          { token: access_token }
          // { withCredentials: true }
        )
        .then((res) => {
          const { status } = res;
          const jwtToken = res.data.data.accessToken;
          // console.log(jwtToken);
          const decodedUserInfo = jwtDecode(jwtToken);
          localStorage.setItem("userInfo", JSON.stringify(decodedUserInfo));
          setCookie("accessJwtToken", jwtToken);
          if (status === 200 || status === 201) {
            const loginUserData = getUser();
            console.log(loginUserData);
            setUserData(loginUserData);
            if (status === 201) navigate("/subform");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/500", { state: { value: true } });
        });
    },
  });

  const bodyData = undefined;
  const detailedData = undefined;

  const garaData = {
    water: 50,
    protein: 50,
    minerals: 50,
    fat: 50,
    weight: 50,
  };

  useEffect(() => {
    const loginUserData = getUser();
    setUserData(loginUserData);
  }, []);

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
            {userData ? (
              <>
                <h1>안녕하세요, {userData.name}님!</h1>
                {detailedData ? (
                  <>
                    {bodyData ? (
                      <p>신체점수 89점</p>
                    ) : (
                      <p>인바디 정보를 등록해주세요</p>
                    )}
                  </>
                ) : (
                  <LoginLink
                    onClick={() =>
                      navigate("/subform", {
                        state: { value: true },
                      })
                    }
                  >
                    상세 정보 등록하기
                    <LoginArrow src={Arrow} alt="loginArrow" />
                  </LoginLink>
                )}
              </>
            ) : (
              <>
                <h1>로그인 되어있지 않아요!</h1>
                <LoginLink
                  onClick={() => {
                    localStorage.clear();
                    login();
                  }}
                >
                  로그인 <LoginArrow src={Arrow} alt="loginArrow" />
                </LoginLink>
              </>
            )}
          </LoginContainer>
        </Header>
        <RadarGrap>
          {userData ? (
            detailedData ? (
              <>
                {bodyData ? (
                  <Radar data={garaData} />
                ) : (
                  <div className="box">
                    <div className="blur">
                      <Radar data={garaData} />
                    </div>
                    <span
                      onClick={() =>
                        navigate("/ocrform", {
                          state: { value: true },
                        })
                      }
                    >
                      오늘의 인바디 등록하기
                      <img src={ArrowBlack} alt="loginArrow" />
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="blur">
                <Radar data={garaData} />
              </div>
            )
          ) : (
            <div className="blur">
              <Radar data={garaData} />
            </div>
          )}
        </RadarGrap>
        <div className="secondeContentBox">
          <Diet>
            <p className="title">식단</p>
            {userData ? (
              detailedData ? (
                <>
                  <p className="menu">밥</p>
                  <p className="menu">감자국</p>
                  <p className="menu">돼지고기부추볶음</p>
                  <p className="menu">양파겉절이</p>
                  <p className="menu">배추김치</p>
                  <p className="menu">우유</p>
                </>
              ) : (
                <p className="center">???</p>
              )
            ) : (
              <p className="center">???</p>
            )}
          </Diet>
          <Discharge>
            <p className="title">전역일</p>
            {userData ? (
              detailedData ? (
                <p className="day">365일 후</p>
              ) : (
                <p className="center">???</p>
              )
            ) : (
              <p className="center">???</p>
            )}
          </Discharge>
        </div>
        <Navigation rank={tocken} />
      </Container>
    </Wrap>
  );
}
