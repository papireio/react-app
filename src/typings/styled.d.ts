import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: {
        primary: string
        secondary: string
      }
      line: {
        primary: string
        secondary: string
        focus: string
        warning: string
        error: string
      }
      text: {
        primary: string
        secondary: string
        warning: string
        error: string
      }
    }
    shadow: {
      primary: string
    }
  }
}
