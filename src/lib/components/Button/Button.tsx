import { PropsWithChildren } from 'react'

import { StyledButton, StyledButtonText } from './styled'
import { ButtonProps } from './types'
import { Spinner } from '../Spinner'

export const Button = ({
  loading,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton {...props}>
      {loading && <Spinner size={21} />}
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  )
}
