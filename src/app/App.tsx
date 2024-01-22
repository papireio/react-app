import 'primereact/resources/themes/lara-light-cyan/theme.css'

import { useEffect } from 'react'

import { PrimeReactProvider } from 'primereact/api'
import { IntlProvider } from 'react-intl'

import { useAuthorize, useLocale } from '@app/hooks'

import { Application, Landing } from '@app/modules'

import css from './App.scss'

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
    <PrimeReactProvider value={{ appendTo: 'self', cssTransition: false }}>
      <IntlProvider locale={locale} messages={messages}>
        <div className={css.container}>
          {isLoading && <div>loading</div>}
          {isAuthorized && <Application />}
          {isUnauthorized && <Landing />}
          {isError && <div>internal server error</div>}
        </div>
      </IntlProvider>
    </PrimeReactProvider>
  )
}

export default App
