import { PropsWithChildren } from 'react'

import { PanelProps } from '@lib/components/Panel/types'

export const Panel = ({
  children,
  title,
  footer,
}: PropsWithChildren<PanelProps>) => {
  return (
    <div>
      {title && (
        <div>
          <span>{title}</span>
        </div>
      )}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  )
}
