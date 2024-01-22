import { useIntl } from 'react-intl'

import { TranslationDictionary } from '@app/i18/types'

export const useTranslate = () => {
  const { formatMessage } = useIntl()

  const translate = (id: TranslationDictionary): string => formatMessage({ id })

  return { translate }
}
