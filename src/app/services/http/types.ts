export interface FetchingError<M extends string = string> extends Error {
  message: M
  status: number
}
