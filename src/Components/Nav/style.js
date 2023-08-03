import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 3vh;
  background-color: #fff;
  @media (min-width: 500px) {
    width: 360px;
  }
`;

export const NMap = styled.img`
  width: 25px;
`;

export const NHome = styled.img`
  width: 30px;
`;

export const NRank = styled.img`
  width: 25px;
`;
