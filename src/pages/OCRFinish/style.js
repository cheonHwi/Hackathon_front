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
  align-items: center;
  justify-content: space-between;
  > button {
    width: 308px;
    height: 58px;

    color: #4f4f4f;
    background-color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 4vh;
  }
`;

export const Header = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    padding-bottom: 5px;
    color: #fff;
    font-size: 25px;
  }
`;
