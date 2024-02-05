import { PropsWithChildren } from 'react'

import { ButtonProps } from '@lib/components/Button/types'

export const Button = ({
  loading,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return <button {...props} disabled={loading} />
}
