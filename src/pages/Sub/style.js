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
  > .boxContainer {
    display: flex;
    justify-content: space-between;
  }
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
    @media (max-width: 280px) {
      font-size: 20px;
    }
  }
  > h2 {
    color: #fff;
    font-size: 20px;
    @media (max-width: 280px) {
      font-size: 16px;
    }
  }
`;

export const Box = styled.div`
  margin-top: 30px;
  padding: 10px;
  width: 30%;
  height: 120px;
  border-radius: 3vh;
  background-color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > p {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 280px) {
      font-size: 12px;
    }
  }
  > h3 {
    @media (max-width: 280px) {
      font-size: 14px;
    }
  }
  @media (max-height: 750px) {
    margin-top: 15px;
    height: 120px;
  }
  @media (max-width: 280px) {
    height: 120px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  padding: 10px 20px;
  width: 100%;
  height: 160px;
  border-radius: 4vh;
  background-color: #fff;
  > p {
    padding-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-height: 750px) {
    margin-top: 20px;
    height: 150px;
  }

  @media (max-height: 670px) {
    margin-top: 15px;
    height: 120px;
  }
`;
