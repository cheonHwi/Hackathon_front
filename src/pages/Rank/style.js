import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #f4f4f4;
  @media (min-width: 500px) {
    width: 400px;
  }
`;

export const Container = styled.div`
  position: absolute;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    padding-bottom: 5px;
    color: #fff;
    font-size: 25px;
  }
  > h2 {
    color: #fff;
    font-size: 20px;
    @media (max-width: 280px) {
      font-size: 16px;
    }
  }
`;

export const StackedBarContainer = styled.div`
  margin-top: 30px;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4vh;
  background-color: #fff;
`;

export const RankContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 4vh;
  background-color: #fff;
  > p {
    padding-left: 10px;
    padding-bottom: 20px;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
  }
`;

export const RankBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      margin-top: 10px;
      > p {
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        line-height: normal;
      }
    }
    > p {
      text-align: center;
      font-size: 15px;
      font-weight: 600;
      line-height: normal;
    }
    > .rank {
      width: 50px;
      padding-bottom: 10px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
        width: 100%;
        height: 5px;
        background-color: #f00;
      }
    }
    .one {
      &::before {
        background-color: #e2cc0c;
      }
    }
    .two {
      &::before {
        background-color: #bfbebe;
      }
    }
    .three {
      &::before {
        background-color: #a94d19;
      }
    }
  }
`;

export const Message = styled.p`
  padding-bottom: 80px;
  padding-top: 30px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;
