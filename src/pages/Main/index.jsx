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
import { getLoginUserData } from "../../utils/data";

const cookies = new Cookies();

export default function Index() {
  const setUserData = useSetRecoilState(userState);
  const userData = useRecoilValue(userState);
  const [detailedData, setDetailedData] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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
          console.log(decodedUserInfo);
          localStorage.setItem("userInfo", JSON.stringify(decodedUserInfo));
          setCookie("accessJwtToken", jwtToken);
          if (status === 200 || status === 201) {
            const accessUser = getUser();
            setIsLogin(accessUser.is_verified);
            console.log(isLogin);
            setUserData(accessUser);
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/500", { state: { value: true } });
        });
    },
  });

  const bodyData = undefined;

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
    try {
    } catch (err) {}
  }, [navigate, state]);

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <LoginContainer>
            {isLogin ? (
              <>
                <h1>안녕하세요, {userData.name}님!</h1>
                {detailedData ? (
                  <>
                    {bodyData ? (
                      <p>신체점수 89점</p>
                    ) : (
                      <LoginLink
                        onClick={() =>
                          navigate("/ocrform", { state: { value: true } })
                        }
                      >
                        인바디 정보를 등록해주세요
                        <LoginArrow src={Arrow} alt="loginArrow" />
                      </LoginLink>
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
          {isLogin ? (
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
            {isLogin ? (
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
            {isLogin ? (
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
