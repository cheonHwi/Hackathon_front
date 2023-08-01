import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6930b7;
  @media (min-width: 500px) {
    display: none;
  }

  > div {
    text-align: center;
  }
`;

export const TitleBox = styled.div`
  padding-bottom: 20px;
  text-align: center;
  color: #fff;
  > h1 {
    @media (max-width: 280px) {
      font-size: 1.5em;
    }
  }
`;

export const TextBox = styled.div`
  padding-bottom: 20px;
  color: #fff;
`;

export const SlideBox = styled.div`
  margin-bottom: 10px;
  width: 280px;
  height: 200px;
  border-radius: 4vh;
  background-color: #fff;

  @media (max-width: 280px) {
    width: 240px;
    height: 160px;
  }
`;

export const BarBox = styled.div`
  display: flex;
  justify-content: center;
  > div {
    margin: 0 3px;
    width: 38px;
    height: 6px;
    border-radius: 4vh;
  }
  > .gray {
    background-color: #979797;
  }
  > .white {
    background-color: #fff;
  }
`;

export const BtnBox = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  > button {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 4vw;
    color: #9a9a9a;
    font-size: 15px;
    background-color: #fff;
  }
`;
