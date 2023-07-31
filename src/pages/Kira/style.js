import styled, {keyframes} from 'styled-components';

export const Wrap = styled.div`
    width: 600px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F4F4;
    border: 1px solid black;

    @media (max-width: 450px){
        width: 100%;
    }
`;

const LogoAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Logo = styled.img`
  animation: ${LogoAnimation} 0.4s forwards;
`