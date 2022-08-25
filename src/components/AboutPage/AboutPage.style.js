import styled from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

export const AboutPageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    margin-left: 40px;
    margin-top: 200px;
    width: 80%;
    h1 {
      color: var(--color-title);
    }
    @media (max-width: 1000px) {
      margin-top: 130px;
    }
  }
`;

export const AboutSectionStyle = styled.section`
  width: 50%;
  margin-top: 40px;
  margin-left: 40px;
  font-size: var(--font-size-body);
  line-height: calc(1.5 * var(--font-size-body));
  color: var(--color-body);
`;

export const SkillsSectionStyle = styled.section`
  width: 70%;
  margin-top: 50px;
  margin-left: 40px;
  h1 {
    color: var(--color-subtitles);
    font-size: var(--font-size-subtitles);
  }
  .skills-container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;

export const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: var(--font-size-titles);
    color: ${(props) => props.color};
  }
  img {
    width: var(--font-size-titles);
    height: var(--font-size-titles);
  }
`;
