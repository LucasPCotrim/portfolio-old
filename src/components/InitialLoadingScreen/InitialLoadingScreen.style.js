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

export const InitialLoadingScreenStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.7);
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
