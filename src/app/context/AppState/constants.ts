import { createContext, Dispatch } from 'react'

import { GetAuthorizedUserError } from '@app/api'
import { AppState, AppStateAction } from '@app/context/AppState/types'
import { userMock } from '@app/mocks/user'
import { getFetchingState } from '@app/services'

export const initialAppState: AppState = {
  fetching: getFetchingState<GetAuthorizedUserError>(),
  user: userMock,
}

export const AppStateContext = createContext<{
  state: AppState
  dispatch: Dispatch<AppStateAction>
}>({
  state: initialAppState,
  dispatch: () => {},
})
