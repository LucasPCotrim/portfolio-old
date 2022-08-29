import styled, { keyframes } from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

export const SkillsPageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    margin-left: 50px;
    margin-top: 100px;
    width: 80%;
    h1 {
      color: var(--color-title);
    }
    @media (max-width: 1000px) {
      margin-top: 40px;
    }
  }
  .skills-container {
    width: 100%;
    margin-left: 50px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    .skills-section {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 5px;
      h1 {
        font-size: var(--font-size-subtitles);
        color: var(--color-title);
        margin-bottom: 10px;
      }
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      .skills-section {
        width: 80%;
      }
    }
  }
`;

const animateSkill = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const SkillStyle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  .skill-bar {
    border-radius: 10px;
    margin-left: 35px;
    width: calc(90% - 35px);
    height: 10px;
    border: 1px solid var(--color-palette-1);
    position: relative;
    overflow: hidden;
    .skill-level {
      transform: scaleX(0);
      transform-origin: left;
      position: absolute;
      top: -1px;
      left: -1px;
      height: 10px;
      width: calc(${(props) => props.width}% + 1px);
      background-color: var(--color-palette-1);
    }
    .skill-animation {
      animation-name: ${animateSkill};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
  @media (max-width: 1000px) {
    height: 40px;
    .skill-bar {
      height: 7px;
      margin-left: 25px;
      .skill-level {
        height: 7px;
      }
    }
  }
`;

export const IconStyle = styled.div`
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: var(--font-size-titles);
    color: ${(props) => props.color};
  }
  img {
    width: calc(0.9 * var(--font-size-titles));
    height: calc(0.9 * var(--font-size-titles));
  }
`;
