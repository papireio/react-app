import { StyledLoading } from './styled'
import { Spinner } from '../Spinner'

export const Loading = () => {
  return (
    <StyledLoading>
      <Spinner size={32} />
    </StyledLoading>
  )
}
