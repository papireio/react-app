import { AxiosError } from 'axios'

import {
  CreateSessionError,
  CreateSessionResponse,
} from '@app/api/session/types'
import {
  AuthorizedApiError,
  ServerErrors,
  UnauthorizedApiRequest,
} from '@app/services'

export const createSession = async (email: string, password: string) => {
  try {
    const { data } = await UnauthorizedApiRequest.post<CreateSessionResponse>(
      '/sign/in',
      {
        email,
        password,
      }
    )

    return data
  } catch (error) {
    const { response } = error as AxiosError

    switch (response?.status) {
      case 400:
        throw new AuthorizedApiError<CreateSessionError>(
          400,
          ServerErrors.BAD_REQUEST
        )

      case 401:
      case 403:
        throw new AuthorizedApiError<CreateSessionError>(
          403,
          ServerErrors.UNAUTHORIZED
        )

      default:
        throw new AuthorizedApiError<CreateSessionError>(
          500,
          ServerErrors.INTERNAL_ERROR
        )
    }
  }
}
