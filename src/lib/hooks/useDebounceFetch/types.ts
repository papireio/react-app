import { GenericAction, GenericReducer } from '../../types/state'

export type UseDebounceFetchState = {
  error: boolean
  idle: boolean
  pending: boolean
  status: number
  succeed: boolean
  message?: string
}

export type FetchResult = {
  status: UseDebounceFetchState['status']
  message?: UseDebounceFetchState['message']
}

export type UseDebounceFetchAction =
  | GenericAction<'INIT'>
  | GenericAction<'START'>
  | GenericAction<'ERROR', FetchResult>
  | GenericAction<'SUCCEED', FetchResult>

export type UseDebounceFetchReducer = GenericReducer<
  UseDebounceFetchState,
  UseDebounceFetchAction
>
