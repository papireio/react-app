import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.svg`
  animation: ${rotate} 0.8s linear infinite;
`
