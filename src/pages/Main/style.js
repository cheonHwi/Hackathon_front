import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  padding: 0 20px;
`;

const CircleHeight = keyframes`
  0% {
    bottom: 0;
    height: 100vh;
  }
 
	100% {
    bottom: 55%;
    width: 500px;
    height: 500px;
    border-radius:  0 0 50vh 50vh;
		@media (max-width: 770px) {
			width: 500px;
    	height: 500px;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  animation: ${CircleHeight} 1s forwards;
  background-color: #9961e6;
`;
