import { Global, css, type Theme } from '@emotion/react';

const globalStyles = (theme: Theme) => css`
  body {
    background-color: ${theme.color.canvas};
    color: ${theme.color.white};
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.body.size};
    font-weight: ${theme.fontSize.body.weight};
    line-height: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyles} />;
}
