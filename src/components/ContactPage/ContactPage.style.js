import styled from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

export const ContactPageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    padding-left: 40px;
    padding-top: 200px;
    width: 80%;
    font-family: 'LeagueSpartan';
    font-size: calc(0.01582278 * 100vw + 26.835444px);
    color: var(--color-palette-3);
    @media (max-width: 1000px) {
      padding-top: 130px;
    }
  }
`;
