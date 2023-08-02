import React, { useState } from "react";
import { Wrap, NMap, NHome, NRank } from "./style";
import Home from "../../assets/images/navIcon/colorHome.png";
import GrayHome from "../../assets/images/navIcon/grayHome.png";
import ColorMap from "../../assets/images/navIcon/colorMap.png";
import Map from "../../assets/images/navIcon/map.png";
import ColorRank from "../../assets/images/navIcon/colorRank.png";
import DisRank from "../../assets/images/navIcon/disRank.png";
import Rank from "../../assets/images/navIcon/rank.png";
import { useNavigate } from "react-router-dom";

export default function Index(prop) {
  const [RankRes] = useState(prop.rank);
  const navigate = useNavigate();

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
          prop.error
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
        src={currentUrl === "/rank" ? ColorRank : !RankRes ? DisRank : Rank}
        alt="rank"
        onClick={() => {
          if (RankRes !== undefined) {
            navigate("/rank", { state: { value: true } });
          }
        }}
      />
    </Wrap>
  );
}
