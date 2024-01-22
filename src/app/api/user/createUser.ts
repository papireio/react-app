import { AxiosError } from 'axios'

import {
  AuthorizedApiError,
  ServerErrors,
  UnauthorizedApiRequest,
} from '@app/services'

import { CreateUserError } from './types'

export const createUser = async (email: string, password: string) => {
  try {
    await UnauthorizedApiRequest.post('/sign/up', { email, password })
  } catch (error) {
    const { response } = error as AxiosError

    switch (response?.status) {
      case 400:
        throw new AuthorizedApiError<CreateUserError>(
          400,
          ServerErrors.BAD_REQUEST
        )

      case 409:
        throw new AuthorizedApiError<CreateUserError>(
          409,
          ServerErrors.DUPLICATE
        )

      default:
        throw new AuthorizedApiError<CreateUserError>(
          500,
          ServerErrors.INTERNAL_ERROR
        )
    }
  }
}
