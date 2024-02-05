import styled, { DefaultTheme } from 'styled-components'

import { InputProps, StyledInputProps } from '@lib/components/Input/types'

const getInputBorderColor = (
  theme: DefaultTheme,
  variant: InputProps['variant']
): string => {
  switch (variant) {
    case 'error':
      return theme.color.line.error

    case 'warning':
      return theme.color.line.warning

    default:
      return theme.color.line.primary
  }
}

const getTextColor = (
  theme: DefaultTheme,
  variant: InputProps['variant']
): string => {
  switch (variant) {
    case 'error':
      return theme.color.text.error

    case 'warning':
      return theme.color.text.warning

    default:
      return theme.color.text.primary
  }
}

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
`

export const StyledInput = styled.input<StyledInputProps>`
  height: 44px;
  color: ${(props) => getTextColor(props.theme, props.variant)};
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid
    ${(props) => getInputBorderColor(props.theme, props.variant)};
  outline: 0;
  margin-top: 12px;

  &:focus {
    outline: 3px solid ${(props) => props.theme.color.line.focus};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.color.text.secondary};
  }
`

export const StyledLabel = styled.span`
  color: ${(props) => props.theme.color.text.primary};
`

export const StyledMessage = styled.span<StyledInputProps>`
  color: ${(props) => getTextColor(props.theme, props.variant)};
  margin-top: 4px;
  margin-left: 2px;
  font-size: 12px;
  line-height: 1.6;
`
