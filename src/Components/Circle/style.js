import styled, { keyframes } from "styled-components";

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
  animation: ${CircleHeight} 1s forwards ease;
  background-color: #9961e6;
`;
