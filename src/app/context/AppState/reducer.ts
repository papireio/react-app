import { GenericReducer } from '@lib/types/state'

import { AppState, AppStateAction } from './types'

export const appStateReducer: GenericReducer<AppState, AppStateAction> = (
  state,
  action
): AppState => {
  switch (action.type) {
    case 'FETCH_USER_ERROR': {
      const { fetching } = state

      return {
        ...state,
        fetching: {
          ...fetching,
          pending: false,
          succeed: false,
          error: action.payload,
        },
      }
    }

    case 'FETCH_USER_START': {
      const { fetching } = state

      return {
        ...state,
        fetching: {
          ...fetching,
          idle: false,
          pending: true,
          error: undefined,
        },
      }
    }

    case 'FETCH_USER_SUCCESS': {
      const { fetching } = state

      return {
        ...state,
        user: action.payload,
        fetching: {
          ...fetching,
          pending: false,
          succeed: true,
        },
      }
    }

    default: {
      return state
    }
  }
}
