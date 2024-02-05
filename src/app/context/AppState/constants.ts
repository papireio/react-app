import { createContext, Dispatch } from 'react'

import { AppState, AppStateAction } from '@app/context/AppState/types'
import { userMock } from '@app/mocks/user'

export const initialAppState: AppState = {
  user: userMock,
}

export const AppStateContext = createContext<{
  state: AppState
  dispatch: Dispatch<AppStateAction>
}>({
  state: initialAppState,
  dispatch: () => {},
})
