import { useEffect, useRef } from "react";
import { Wrap, Container, Header, List, Site, Belong, Map } from "./style";
import TestMap from "../../assets/images/testMap.png";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { userState } from "../../store/atoms";
import { useRecoilValue } from "recoil";

export default function Index() {
  const userData = useRecoilValue(userState);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  const belong = {
    육군: "#258C4E",
    공군: "#3289B9",
  };

  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>점수를 비교해보세요!</h1>
        </Header>
        <List>
          <p>추천 체력단련장</p>
          <ul>
            <li>
              <Site>서빙고동 체력단련실</Site>
              <Belong></Belong>민간유료 / 헬스
            </li>
            <li>
              <Site>수원 체력단련장</Site>
              <Belong color={belong.공군}>공군</Belong>/ 골프(9홀)
            </li>
            <li>
              <Site>계룡 체력단련장</Site>
              <Belong color={belong.육군}>육군</Belong>/ 골프(18홀)
            </li>
          </ul>
        </List>
        <Map>
          <p>주변 체력단련장</p>
          <div
            ref={mapElement}
            style={{ minHeight: "350px", borderRadius: "4vh" }}
          />
          {/* <img src={TestMap} alt="testMap" /> */}
        </Map>
        <Navigation />
      </Container>
    </Wrap>
  );
}
