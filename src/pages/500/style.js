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
  > .messageContainer {
    width: 100%;
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const Header = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    padding-bottom: 5px;
    color: #fff;
    font-size: 2em;
  }
  > h2 {
    color: #fff;
    @media (max-width: 280px) {
      font-size: 16px;
    }
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: 280px) {
    font-size: 1em;
  }
`;
