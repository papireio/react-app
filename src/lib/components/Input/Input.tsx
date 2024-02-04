import cn from 'classnames'

import css from './styles.css'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const className = cn(css.container, props.className)

  return <input {...props} className={className} />
}
