import React from "react";
import { Wrap } from "./style";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function index() {
  return (
    <Wrap>
      <ClimbingBoxLoader color="#9961E6" size={25} />
    </Wrap>
  );
}
