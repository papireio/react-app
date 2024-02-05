import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  html {
    font-size: 16px;
  }

  input {
    font-family: -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
    font-size: 1rem;
  }

  body {
    font-family: -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
    font-feature-settings: 'pnum';
    font-size: 1rem;
    line-height: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.bg.primary};
  }
`

export const ResetCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`
