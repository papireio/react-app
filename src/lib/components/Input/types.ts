import { InputHTMLAttributes } from 'react'

export type StyledInputProps = Pick<InputProps, 'variant'>

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  label?: string
  variant?: 'normal' | 'warning' | 'error'
  message?: string
}
