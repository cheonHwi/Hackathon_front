import React from "react";
import { Wrap, NMap, NHome, NRank } from "./style";
import Home from "../../assets/images/Navigation/colorHome.png";
import GrayHome from "../../assets/images/Navigation/grayHome.png";
import ColorMap from "../../assets/images/Navigation/colorMap.png";
import Map from "../../assets/images/Navigation/map.png";
import ColorRank from "../../assets/images/Navigation/colorRank.png";
import DisRank from "../../assets/images/Navigation/disRank.png";
import Rank from "../../assets/images/Navigation/rank.png";

export default function index() {
  return (
    <Wrap>
      <NMap src={Map} alt="map" />
      <NHome src={Home} alt="home" />
      <NRank src={Rank} alt="rank" />
    </Wrap>
  );
}
