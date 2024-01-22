import { useMemo } from 'react'

import { Locale } from '@app/i18/constants'
import en from '@app/i18/en'
import es from '@app/i18/es'
import { I18 } from '@app/i18/types'

const getMessages = (locale: Locale): I18 => {
  switch (locale) {
    case Locale.en:
      return en

    case Locale.es:
      return es

    default:
      return en
  }
}

export const useLocale = () => {
  const locale = Locale.en
  const messages = useMemo(() => getMessages(locale), [locale])

  return {
    locale,
    messages,
  }
}
