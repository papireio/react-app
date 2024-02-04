import { PropsWithChildren } from 'react'

import cn from 'classnames'

import { ButtonProps } from '@lib/components/Button/types'

import css from './styles.css'

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const className = cn(css.container, props.className)

  return <button {...props} className={className} />
}
