import { PropsWithChildren, useMemo } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { whiteTheme } from '@lib/themes'

import { ThemeProviderProps } from './types'

export const ThemeProvider = ({
  children,
  theme = 'white',
}: PropsWithChildren<ThemeProviderProps>) => {
  const value = useMemo(() => {
    switch (theme) {
      default:
        return whiteTheme
    }
  }, [theme])

  return <StyledThemeProvider theme={value}>{children}</StyledThemeProvider>
}
