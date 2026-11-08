import { css, Global, type Theme } from '@emotion/react';

const globalStyles = (theme: Theme) => css`
  body {
    min-height: 100dvh;
    font-family: var(--font-sans);
    color: ${theme.colors.foreground};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

function GlobalStyle() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyle;
