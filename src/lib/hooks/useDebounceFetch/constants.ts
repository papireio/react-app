import { UseDebounceFetchState } from './types'

export const useDebounceFetchState: UseDebounceFetchState = {
  idle: true,
  error: false,
  pending: false,
  succeed: false,
  status: 0,
}
