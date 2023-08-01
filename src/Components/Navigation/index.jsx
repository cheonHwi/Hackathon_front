import React, { useState } from "react";
import { Wrap, NMap, NHome, NRank } from "./style";
import Home from "../../assets/images/Navigation/colorHome.png";
import GrayHome from "../../assets/images/Navigation/grayHome.png";
import ColorMap from "../../assets/images/Navigation/colorMap.png";
import Map from "../../assets/images/Navigation/map.png";
import ColorRank from "../../assets/images/Navigation/colorRank.png";
import DisRank from "../../assets/images/Navigation/disRank.png";
import Rank from "../../assets/images/Navigation/rank.png";
import { useNavigate } from "react-router-dom";

export default function Index(resTocken) {
  const [RankRes] = useState(resTocken.rank);
  console.log(RankRes);
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
        src={currentUrl === "/main" ? Home : GrayHome}
        alt="home"
        onClick={() => {
          navigate("/main", { state: { value: true } });
        }}
      />

      <NRank
        src={currentUrl === "/rank" ? ColorRank : !RankRes ? DisRank : Rank}
        alt="rank"
        onClick={() => {
          // RankRes === undefined
          //   ? console.log("비활성")
          //   :
          navigate("/rank", { state: { value: true } });
        }}
      />
    </Wrap>
  );
}
