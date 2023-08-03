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
  justify-content: space-between;

  > form {
    padding: 0 20px;
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
  }
`;

export const Label = styled.label`
  padding: 5px 25px;
  width: 100%;
  height: 80px;
  border-radius: 4vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > p {
    font-size: 15px;
    font-weight: 600;
    color: #4e4e4e;
  }
  > select {
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    border: none;
  }
  > input {
    position: relative;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    border: none;
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      width: 100%;
      background: none;
      cursor: pointer;
    }
  }
  @media (max-height: 750px) {
    margin-top: 15px;
    height: 120px;
  }
`;

export const SubmitBtn = styled.input`
  margin-top: 10px;
  width: 200px;
  height: 60px;
  font-size: 24px;
  font-weight: 800;
  border-radius: 4vh;
  border: none;
  color: #4f4f4f;
  background-color: #fff;
`;
