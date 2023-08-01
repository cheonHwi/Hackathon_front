import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  animation: ${LogoAnimation} 0.4s forwards;
`;
