import styled, { keyframes } from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

const animateFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const HomePageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    padding-left: 40px;
    padding-top: 200px;
    width: 80%;
    font-family: 'LeagueSpartan';
    font-size: calc(0.01582278 * 100vw + 26.835444px);
    color: var(--color-palette-3);
    pointer-events: none;
    h1 {
      opacity: 0;
      animation: ${animateFadeIn} 0.5s linear 1s forwards;
    }
    .typewritter {
      margin-top: 50px;
      color: var(--color-palette-2);
      opacity: 0;
      animation: ${animateFadeIn} 0.5s linear 1.5s forwards;
    }
    @media (max-width: 1000px) {
      padding-top: 130px;
    }
  }
`;
