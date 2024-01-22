export interface FetchingError<M extends string = string> extends Error {
  message: M
  status: number
}

export type FetchingState<E extends string = string> = {
  pending: boolean
  idle: boolean
  succeed: boolean
  error: FetchingError<E> | undefined
}
