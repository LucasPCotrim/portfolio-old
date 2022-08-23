import styled, { createGlobalStyle, css } from 'styled-components';

const Reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const Global = css`
  * {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    --color-palette-0: #01010e;
    --color-palette-1: #1363df;
    --color-palette-2: #47b5ff;
    --color-palette-3: #dff6ff;
    --color-menus: #171617;
    --color-menus-alt: #0f0f0f;
    --icon-color: #4d4d4e;
    --navbar-size: 80px;
    --navbar-size-mobile: 60px;

    background-color: var(--color-palette-0);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Global};
`;

export const PageStyle = styled.div`
  z-index: 0;
  width: 100vw;
  height: 100vh;
  margin-left: var(--navbar-size);
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-bottom: var(--navbar-size-mobile);
  }
`;

export default GlobalStyle;
