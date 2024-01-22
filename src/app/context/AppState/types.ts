import { GetAuthorizedUserError } from '@app/api'
import { User } from '@app/models/User'
import { AuthorizedApiError, FetchingState } from '@app/services'

import { GenericAction } from '@lib/types/state'

export type AppState = {
  user: User
  fetching: FetchingState<GetAuthorizedUserError>
}

export type AppStateAction =
  | GenericAction<'FETCH_USER_START'>
  | GenericAction<
      'FETCH_USER_ERROR',
      AuthorizedApiError<GetAuthorizedUserError>
    >
  | GenericAction<'FETCH_USER_SUCCESS', User>
