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
import Circle from "../../components/Circle";
import Arrow from "../../assets/images/arrow.png";
import Navigation from "../../components/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";

const cookies = new Cookies();

export default function Index() {
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
          console.log(res.data);
          setToken(res.data);
        });
    },
  });

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
            {tocken ? (
              <>
                <h1>안녕하세요, {tocken.name}님!</h1>
                <p>인바디 정보를 등록해주세요</p>
                {/* <LoginLink
                  onClick={() =>
                    navigate("/subform", {
                      state: { value: true, name: "홍길동" },
                    })
                  }
                >
                  상세 정보 등록하기 <LoginArrow src={Arrow} alt="loginArrow" />
                </LoginLink> */}
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
        <RadarGrap>radargrap</RadarGrap>
        <div className="secondeContentBox">
          <Diet>diet</Diet>
          <Discharge>discharge</Discharge>
        </div>
        <Navigation rank={tocken} />
      </Container>
    </Wrap>
  );
}
