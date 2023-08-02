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
  > form {
    position: absolute;
    bottom: 150px;
    > input[type="file"] {
      display: none;
    }

    > label.upload-button {
      padding: 15px;
      width: 200px;
      height: 60px;
      display: inline-block;
      background-color: #fff;
      cursor: pointer;
      text-align: center;
      color: #4f4f4f;
      text-align: center;
      font-size: 24px;
      font-weight: 800;
      border-radius: 4vh;
    }

    > .upload-container {
      text-align: center;
    }
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

export const Label = styled.label`
  padding: 5px 25px;
  width: 100%;
  height: 80px;
  border-radius: 4vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  /* width: 200px; */
  /* height: 60px; */
  /* font-size: 24px; */
  /* font-weight: 800; */
  /* border: none; */
  /* color: #4f4f4f; */
  /* background-color: #fff; */
`;
