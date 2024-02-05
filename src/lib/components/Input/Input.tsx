import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledMessage,
} from './styled'
import { InputProps } from './types'

export const Input = ({ label, message, ...props }: InputProps) => {
  return (
    <StyledInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...props} />
      {message && (
        <StyledMessage variant={props.variant}>message</StyledMessage>
      )}
    </StyledInputContainer>
  )
}
