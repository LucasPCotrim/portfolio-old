import styled from 'styled-components';
import { PageStyle } from '../../global/GlobalStyle';

export const ContactPageStyle = styled(PageStyle)`
  .title-container {
    display: inline-block;
    margin-left: 40px;
    margin-top: 200px;
    width: 80%;
    color: var(--color-title);
    @media (max-width: 1000px) {
      margin-top: 130px;
    }
  }
`;
