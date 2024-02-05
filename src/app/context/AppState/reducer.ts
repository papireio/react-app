import { GenericReducer } from '@lib/types/state'

import { AppState, AppStateAction } from './types'

export const appStateReducer: GenericReducer<AppState, AppStateAction> = (
  state,
  action
): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}
