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
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 50px 0;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 50px;
    }
  }

  @media (max-width: 1000px) {
    top: initial;
    bottom: 0px;
    height: var(--navbar-size-mobile);
    width: 100vw;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transform-origin: bottom;
    transform: scaleY(0);
    animation-name: ${animateNavBarMobile};
    animation-delay: 3.5s;
    .logo-container {
      img {
        width: 32px;
      }
    }
  }
`;

export const PagesContainerStyle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 30px;
    transition: all 0.5s;
    .icon {
      color: var(--icon-color);
      transition: all 1s;
    }
    &:hover {
      background-color: var(--color-menus-alt);
      & .icon {
        color: var(--color-palette-3);
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const ExteralLinksContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: var(--icon-color);
    cursor: pointer;
    &:hover {
      color: var(--color-palette-3);
    }
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    width: initial;
    height: 100%;
  }
`;
