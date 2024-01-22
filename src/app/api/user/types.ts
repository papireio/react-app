import { ServerErrors } from '@app/services'

export type GetAuthorizedUserError =
  | ServerErrors.UNAUTHORIZED
  | ServerErrors.INTERNAL_ERROR

export type CreateUserError =
  | ServerErrors.BAD_REQUEST
  | ServerErrors.DUPLICATE
  | ServerErrors.INTERNAL_ERROR
