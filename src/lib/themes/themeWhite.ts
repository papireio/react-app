import { DefaultTheme } from 'styled-components'

const colorOrange = '#ffa200ff'
const colorRed = '#9a031eff'

export const whiteTheme: DefaultTheme = {
  color: {
    bg: {
      primary: '#ffffff',
      secondary: '#f6f8fa33',
    },
    line: {
      primary: '#adb5bd77',
      secondary: '#ebeef1ff',
      focus: '#bde0feff',
      warning: colorOrange,
      error: colorRed,
    },
    text: {
      primary: '#424257ff',
      secondary: '#3c425799',
      warning: colorOrange,
      error: colorRed,
    },
  },
  shadow: {
    primary:
      'rgb(60 66 87 / 8%) 0px 15px 35px 0px, rgb(0 0 0 / 12%) 0px 5px 15px 0px',
  },
}
