import styled, { keyframes } from 'styled-components';

const animateNavBar = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;
const animateNavBarMobile = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const NavBarStyle = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: var(--navbar-size);
  transform-origin: left;
  transform: scaleX(0);
  background-color: var(--color-menus);
  animation-name: ${animateNavBar};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.27, 0.61, 0.25, 1.37);
  animation-delay: 4s;
  animation-fill-mode: forwards;
  @media (max-width: 1000px) {
    height: var(--navbar-size-mobile);
    width: 100vw;
    transform-origin: top;
    transform: scaleY(0);
    animation-name: ${animateNavBarMobile};
    animation-delay: 3.5s;
  }
`;
