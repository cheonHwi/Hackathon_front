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

  > .secondeContentBox {
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const LoginContainer = styled.div`
  > h1 {
    padding-bottom: 5px;
    color: #fff;
    font-size: 28px;
    @media (max-width: 280px) {
      font-size: 20px;
    }
  }
  > p {
    font-size: 24px;
    font-weight: 800;
    color: #fff;
    @media (max-width: 280px) {
      font-size: 20px;
    }
  }
`;

export const LoginLink = styled.a`
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 90%;
    height: 2px;
    background-color: #fff;
  }
  @media (max-width: 280px) {
    font-size: 20px;
  }
`;

export const LoginArrow = styled.img`
  width: 24px;
`;

export const RadarGrap = styled.div`
  margin: 60px 0 30px 0;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4vh;
  background-color: #fff;
  text-align: center;
  > .blur {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: blur(4px);
    border-radius: 4vh;
    background-color: #fff;
  }

  > .link {
    position: relative;
    padding: 10px;
    width: 100%;
    height: 100%;
    @media (max-width: 280px) {
      font-size: 20px;
    }
  }

  .box {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4vh;
    > span {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 14px;
      font-weight: 800;
      > img {
        width: 14px;
      }
      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        right: 5px;
        width: 95%;
        height: 2px;
        background-color: #000;
      }
    }
    > .blur {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4vh;
      filter: blur(4px);

      background-color: #fff;
    }
  }

  @media (max-height: 750px) {
    margin: 20px 0 10px 0;
    height: 280px;
  }
  @media (max-width: 280px) {
    margin: 30px 0 15px 0;
    height: 240px;
  }
`;

export const Diet = styled.div`
  margin-bottom: 80px;
  padding: 20px;
  width: 40%;
  height: auto;
  border-radius: 4vh;
  background-color: #fff;
  text-align: center;
  > .title {
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
  }
  > .menu {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > .center {
    font-size: 24px;
    font-weight: 600;
    line-height: 100px;
  }
`;

export const Discharge = styled.div`
  margin-bottom: 80px;
  padding: 20px;

  width: 55%;
  height: auto;
  border-radius: 4vh;
  background-color: #fff;
  text-align: center;
  > .title {
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
  }
  > .day {
    font-size: 24px;
    font-weight: 400;
    line-height: 100px;
  }

  .center {
    font-size: 24px;
    font-weight: 600;
    line-height: 100px;
  }
`;
