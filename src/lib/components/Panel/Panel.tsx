import { PropsWithChildren } from 'react'

import { PanelProps } from '@lib/components/Panel/types'

import css from './styles.css'

export const Panel = ({
  children,
  title,
  footer,
}: PropsWithChildren<PanelProps>) => {
  return (
    <div className={css.container}>
      {title && (
        <div className={css.header}>
          <span className={css.title}>{title}</span>
        </div>
      )}
      <div className={css.body}>{children}</div>
      {footer && <div className={css.footer}>{footer}</div>}
    </div>
  )
}
