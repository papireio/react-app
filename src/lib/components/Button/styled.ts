import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  background-color: ${(props) => props.theme.color.fill.primary};
  color: ${(props) => props.theme.color.text.inverted};
  outline: 0;
  border: 0;
  height: 44px;
  align-items: center;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
  justify-content: center;

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.color.line.focus};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.color.fill.secondary};
    transform: translateY(0px);
  }
`

export const StyledButtonText = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
