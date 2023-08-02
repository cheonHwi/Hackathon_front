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
    display: none;
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
    font-size: 25px;
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
  font-size: 24px;
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
  > .link {
    position: relative;
    > p {
      padding: 10px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
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
  }
  @media (max-height: 750px) {
    margin: 40px 0 30px 0;
    height: 200px;
  }
  @media (max-width: 280px) {
    margin: 30px 0 15px 0;
    height: 200px;
  }
`;

export const Diet = styled.div`
  width: 40%;
  height: 170px;
  border-radius: 4vh;
  background-color: #fff;
  text-align: center;
`;

export const Discharge = styled.div`
  width: 55%;
  height: 170px;
  border-radius: 4vh;
  background-color: #fff;
  text-align: center;
`;
