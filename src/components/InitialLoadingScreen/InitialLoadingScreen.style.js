import styled, { keyframes } from 'styled-components';

const animateSVG = keyframes`
  0% {
    stroke-dashoffset: 28500;
    fill: transparent;
  }
  15% {
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill:  var(--color-palette-3);
  }
`;

const animateLogoContainer = keyframes`
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(0.6);
    opacity: 0;
  }
`;

export const InitialLoadingScreenStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.7);
    animation: ${animateLogoContainer} 1s 2s linear forwards;
    svg path {
      stroke-dasharray: 28500;
      stroke-dashoffset: 28500;
      stroke-width: 40;
      animation: ${animateSVG} 4s linear forwards;
    }
    svg > g {
      position: absolute;
      top: 30px;
      left: 100px;
    }
  }
`;
