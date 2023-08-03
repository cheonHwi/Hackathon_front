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
import disCharge from "../../components/Discharge";
import {
  accessTokenState,
  loginState,
  physicalState,
  userState,
} from "../../store/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const cookies = new Cookies();

export default function Index() {
  const setUserInfo = useSetRecoilState(userState);
  const userInfo = useRecoilValue(userState);
  const setIsLogin = useSetRecoilState(loginState);
  const isLogin = useRecoilValue(loginState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setPhysicalInfo = useSetRecoilState(physicalState);
  const physicalInfo = useRecoilValue(physicalState);

  const { state } = useLocation();
  const [physicalInfoData, setPhysicalInfoData] = useState({});
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const { access_token } = tokenResponse;
      cookies.set("token", tokenResponse.access_token);
      axios
        .post(
          "https://undressing.shd.one/user/login",
          { token: access_token },
          { withCredentials: true }
        )
        .then(({ data }) => {
          const returndToken = data.data.accessToken;
          setIsLogin(true);
          setAccessToken(returndToken);
          axios
            .get(
              "https://undressing.shd.one/user/accessTokenRequest",
              { headers: { Authorization: `Bearer ${returndToken}` } },
              {
                withCredentials: true,
              }
            )
            .then(({ data }) => {
              setUserInfo(data);

              axios
                .post("https://undressing.shd.one/data/getCurrentInfo", {
                  id: data.id,
                })
                .then(({ data }) => {
                  setPhysicalInfo(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  useEffect(() => {
    try {
      setPhysicalInfoData({
        skeletal_muscle_mass: physicalInfo.skeletal_muscle_mass,
        body_fat_percentage: physicalInfo.body_fat_percentage,
        fat: physicalInfo.body_fat,
        weight: physicalInfo.weight,
        ages: physicalInfo.ages,
        height: physicalInfo.height,
        bmi: physicalInfo.bmi,
      });
    } catch (err) {
      console.log(err);
    }
  }, [userInfo, physicalInfo]);
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
            {isLogin && userInfo ? (
              <>
                <h1>안녕하세요, {userInfo.name}님!</h1>
                {userInfo.is_verified ? (
                  <>
                    {physicalInfo ? (
                      <LoginLink
                        onClick={() =>
                          navigate("/sub", {
                            state: {
                              value: true,
                              inbodyScore: physicalInfo.inbody_score,
                            },
                          })
                        }
                      >
                        신체점수 {physicalInfo.inbody_score}점
                        <LoginArrow src={Arrow} alt="loginArrow" />
                      </LoginLink>
                    ) : (
                      <LoginLink
                        onClick={() =>
                          navigate("/ocrform", {
                            state: { value: true, userid: userInfo.id },
                          })
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
          {isLogin && userInfo ? (
            userInfo.is_verified ? (
              <>
                {physicalInfo ? (
                  <div className="box">
                    <Radar data={physicalInfoData} />
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
              userInfo.is_verified ? (
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
              userInfo.is_verified ? (
                <p className="day">
                  {disCharge(userInfo.affiliation, userInfo.enlistment_date)}
                </p>
              ) : (
                <p className="center">???</p>
              )
            ) : (
              <p className="center">???</p>
            )}
          </Discharge>
        </div>
        <Navigation />
      </Container>
    </Wrap>
  );
}
