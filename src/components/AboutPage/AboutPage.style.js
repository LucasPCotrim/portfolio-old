import styled from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

export const AboutPageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    margin-left: 50px;
    margin-top: 100px;
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
  margin-left: 50px;
  font-size: var(--font-size-body);
  line-height: calc(1.5 * var(--font-size-body));
  color: var(--color-body);
`;
