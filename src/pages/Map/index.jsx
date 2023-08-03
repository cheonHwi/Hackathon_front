import { useEffect, useRef, useState } from "react";
import { Wrap, Container, Header, List, Site, Belong, Map } from "./style";
import Circle from "../../components/Circle";
import Navigation from "../../components/Nav";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { userState } from "../../store/atoms";
import { useRecoilValue } from "recoil";

export default function Index() {
  const userData = useRecoilValue(userState);
  const [MapData1, setMapData1] = useState({});
  const [MapData2, setMapData2] = useState({});
  const [MapData3, setMapData3] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  useEffect(() => {
    axios
      .get("https://undressing.shd.one/map/query")
      .then((res) => {
        const range = Math.floor(Math.random() * 36);
        setMapData1(res.data[range]);
        setMapData2(res.data[range + 1]);
        setMapData3(res.data[range + 2]);
      })
      .catch((error) => console.error(error));
    // 에러시 페이리 라우팅 처리 하기
  }, []);
  // console.log(MapData1);
  // console.log(MapData2);
  // console.log(MapData3);

  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        window.alert("현재위치를 알수 없습니다.");
      }
    };
    const showPosition = (position) => {
      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new naver.maps.Map(mapElement.current, mapOptions);
      const gym_loc_list = [
        {
          place: MapData1.gym_name,
          lat: MapData1.gym_positiony,
          lng: MapData1.gym_positionx,
        },
        {
          place: MapData1.gym_name,
          lat: MapData2.gym_positiony,
          lng: MapData2.gym_positionx,
        },
        {
          place: MapData1.gym_name,
          lat: MapData3.gym_positiony,
          lng: MapData3.gym_positionx,
        },
        {
          place: "NOW",
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      ];
      for (var i = 0; i < gym_loc_list.length; i++) {
        new naver.maps.Marker({
          icon: {
            url: "https://test.shd.one/marker.png",
            size: new window.naver.maps.Size(33, 33),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(11, 35),
          },
          title: gym_loc_list[i].place,
          position: new naver.maps.LatLng(
            gym_loc_list[i].lat,
            gym_loc_list[i].lng
          ),
          map,
        });
      }
    };
    const showDefaultPosition = () => {
      const defaultPosition = new naver.maps.LatLng(37.5665, 126.978); // 서울시청 좌표 또는 원하는 기본 위치의 좌표
      const mapOptions = {
        center: defaultPosition,
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      new naver.maps.Map(mapElement.current, mapOptions);
      const map = new naver.maps.Map(mapElement.current, mapOptions);

      const gym_loc_list = [
        {
          place: MapData1.gym_name,
          lat: MapData1.gym_positiony,
          lng: MapData1.gym_positionx,
        },
        {
          place: MapData1.gym_name,
          lat: MapData2.gym_positiony,
          lng: MapData2.gym_positionx,
        },
        {
          place: MapData1.gym_name,
          lat: MapData3.gym_positiony,
          lng: MapData3.gym_positionx,
        },
      ];
      for (var i = 0; i < 3; i++) {
        new naver.maps.Marker({
          icon: {
            url: "https://test.shd.one/marker.png",
            size: new window.naver.maps.Size(33, 33),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(11, 35),
          },
          title: gym_loc_list[i].place,
          position: new naver.maps.LatLng(
            gym_loc_list[i].lat,
            gym_loc_list[i].lng
          ),
          map,
        });
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        showDefaultPosition
      );
    } else {
      showDefaultPosition();
    }
    getLocation();
  }, [MapData1, MapData2, MapData3]);

  return (
    <Wrap>
      <Circle />
      <Container>
        <Header>
          <h1>체력단련장을 찾아보세요!</h1>
        </Header>
        <List>
          <p>추천 체력단련장</p>
          <ul>
            <li>
              <Site>{MapData1.gym_name}</Site>
              <Belong color={MapData1.gym_employer}>
                {MapData1.gym_employer}
              </Belong>
              / {MapData1.gym_type}
            </li>
            <li>
              <Site>{MapData2.gym_name}</Site>
              <Belong color={MapData2.gym_employer}>
                {MapData2.gym_employer}
              </Belong>
              / {MapData2.gym_type}
            </li>
            <li>
              <Site>{MapData3.gym_name}</Site>
              <Belong color={MapData3.gym_employer}>
                {MapData3.gym_employer}
              </Belong>
              / {MapData3.gym_type}
            </li>
          </ul>
        </List>
        <Map>
          <p>체력단련장</p>
          <div
            ref={mapElement}
            style={{
              width: "100%",
              height: "90%",
              marginBottom: "10px",
              borderRadius: "4vh",
            }}
          />
        </Map>
        <Navigation />
      </Container>
    </Wrap>
  );
}
