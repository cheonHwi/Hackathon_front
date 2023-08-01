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
  }
`;

export const ConentBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 150px;
  text-align: center;
  border-radius: 4vh;
  background-color: #fff;
`;

export const Message = styled.p`
  padding-top: 30px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;
