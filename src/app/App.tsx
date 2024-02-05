import { useEffect } from 'react'

import { IntlProvider } from 'react-intl'

import { useAuthorize, useLocale } from '@app/hooks'

import { Application, Landing } from '@app/modules'

import { Loading, ThemeProvider } from '@lib/components'
import { GlobalCss, ResetCss } from '@lib/styles'

const App = () => {
  const { locale, messages } = useLocale()
  const {
    fetchAuthorizedUser,
    isAuthorized,
    isUnauthorized,
    isLoading,
    isError,
  } = useAuthorize()

  useEffect(() => {
    fetchAuthorizedUser()
  }, [])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <ResetCss />
        <GlobalCss />
        {isLoading && <Loading />}
        {isAuthorized && <Application />}
        {isUnauthorized && <Landing />}
        {isError && <div>internal server error</div>}
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
