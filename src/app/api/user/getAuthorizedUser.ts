import { AxiosError } from 'axios'

import { GetAuthorizedUserError } from '@app/api'
import { User } from '@app/models/User'
import {
  AuthorizedApiError,
  AuthorizedApiRequest,
  ServerErrors,
} from '@app/services/http'

export const getAuthorizedUser = async () => {
  try {
    const { data } = await AuthorizedApiRequest.get<User>('/user')

    return data
  } catch (error) {
    const { response } = error as AxiosError

    switch (response?.status) {
      case 401:
        throw new AuthorizedApiError<GetAuthorizedUserError>(
          401,
          ServerErrors.UNAUTHORIZED
        )

      default:
        throw new AuthorizedApiError<GetAuthorizedUserError>(
          500,
          ServerErrors.INTERNAL_ERROR
        )
    }
  }
}
