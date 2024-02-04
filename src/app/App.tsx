import '@lib/style.css'
import { useEffect } from 'react'

import { IntlProvider } from 'react-intl'

import { useAuthorize, useLocale } from '@app/hooks'

import { Application, Landing } from '@app/modules'

import css from './App.css'

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
      <div className={css.container}>
        {isLoading && <div>loading</div>}
        {isAuthorized && <Application />}
        {isUnauthorized && <Landing />}
        {isError && <div>internal server error</div>}
      </div>
    </IntlProvider>
  )
}

export default App
