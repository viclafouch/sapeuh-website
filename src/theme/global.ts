import { css } from '@emotion/react'

export const globals = css`
  html {
    box-sizing: border-box;
    min-height: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #__next {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    flex: 1;
  }
`
