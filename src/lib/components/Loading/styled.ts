import styled from 'styled-components'

export const StyledLoading = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.text.primary};
`
