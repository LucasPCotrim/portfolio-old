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
    transform: scale(0.65);
    opacity: 0;
  }
`;
const animateLogoContainerSmall = keyframes`
  0% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.3714);
    opacity: 0;
  }
`;

export const InitialLoadingScreenStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.7);

  animation-name: ${animateLogoContainer};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(1, 0.01, 0.32, 1.05);
  animation-delay: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 1000px) {
    transform: scale(0.4);
    animation-name: ${animateLogoContainerSmall};
  }
  svg path {
    stroke-dasharray: 28500;
    stroke-dashoffset: 28500;
    stroke-width: 40;
    animation-name: ${animateSVG};
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(1, 0, 0.54, 1);
    animation-fill-mode: forwards;
  }
`;

const animateBackgroundDecoration = keyframes`
  0% {
    transform: rotateZ(45deg) scale(1);
  }
  100% {
    transform: rotateZ(45deg) scale(0);
  }
`;

export const BackgroundDecorationStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  span {
    --corner-decoration-size: calc(0.25 * min(100vw, 100vh));
    display: box;
    position: absolute;
    background-color: var(--color-menus);
    width: var(--corner-decoration-size);
    height: var(--corner-decoration-size);
    transform-origin: center;
    transform: rotateZ(45deg);
    animation-name: ${animateBackgroundDecoration};
    animation-duration: 1s;
    animation-delay: 3s;
    animation-timing-function: cubic-bezier(1, 0, 0.54, 1);
    animation-fill-mode: forwards;
  }
  span:nth-child(1) {
    top: calc(0% - 0.5 * var(--corner-decoration-size));
    left: calc(0% - 0.5 * var(--corner-decoration-size));
  }
  span:nth-child(2) {
    top: calc(0% - 0.5 * var(--corner-decoration-size));
    left: calc(100% - 0.5 * var(--corner-decoration-size));
  }
  span:nth-child(3) {
    top: calc(100% - 0.5 * var(--corner-decoration-size));
    left: calc(100% - 0.5 * var(--corner-decoration-size));
  }
  span:nth-child(4) {
    top: calc(100% - 0.5 * var(--corner-decoration-size));
    left: calc(0% - 0.5 * var(--corner-decoration-size));
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
