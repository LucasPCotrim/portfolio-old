import styled, { keyframes } from 'styled-components';

const animateFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: ${animateFadeIn} 3s linear 0.5s forwards;
`;
