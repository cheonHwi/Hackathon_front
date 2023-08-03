import React from "react";
import { Wrap, NMap, NHome, NRank } from "./style";
import Home from "../../assets/images/navIcon/colorHome.png";
import GrayHome from "../../assets/images/navIcon/grayHome.png";
import ColorMap from "../../assets/images/navIcon/colorMap.png";
import Map from "../../assets/images/navIcon/map.png";
import ColorRank from "../../assets/images/navIcon/colorRank.png";
import DisRank from "../../assets/images/navIcon/disRank.png";
import Rank from "../../assets/images/navIcon/rank.png";
import { useNavigate } from "react-router-dom";
import { userState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
export default function Index(prop) {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userState);
  const currentUrl = window.location.pathname;

  return (
    <Wrap>
      <div>
        <NMap
          src={currentUrl === "/map" ? ColorMap : Map}
          alt="map"
          onClick={() => {
            navigate("/map", { state: { value: true } });
          }}
        />
      </div>
      <NHome
        src={
          prop.check
            ? Home
            : currentUrl === "/main" && currentUrl
            ? Home
            : GrayHome
        }
        alt="home"
        onClick={() => {
          navigate("/main", { state: { value: true } });
        }}
      />

      <NRank
        src={currentUrl === "/rank" ? ColorRank : !userInfo.id ? DisRank : Rank}
        alt="rank"
        onClick={() => {
          if (userInfo.id !== undefined) {
            navigate("/rank", { state: { value: true } });
          }
        }}
      />
    </Wrap>
  );
}
