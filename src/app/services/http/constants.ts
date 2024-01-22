import { FetchingState } from '@app/services/http'

export const enum ServerErrors {
  UNAUTHORIZED = 'unauthorized',
  INTERNAL_ERROR = 'internal_server_error',
  BAD_REQUEST = 'bad_request',
  DUPLICATE = 'record_exist',
}

export const getFetchingState = <E extends string = string>() => {
  const fetchingState: FetchingState<E> = {
    idle: true,
    pending: false,
    succeed: false,
    error: undefined,
  }

  return fetchingState
}
