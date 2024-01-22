import { ServerErrors } from '@app/services'

export type CreateSessionError =
  | ServerErrors.UNAUTHORIZED
  | ServerErrors.INTERNAL_ERROR
  | ServerErrors.BAD_REQUEST

export type CreateSessionResponse = {
  session_token: string
}
