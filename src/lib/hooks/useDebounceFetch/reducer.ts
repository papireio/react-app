import { UseDebounceFetchReducer, UseDebounceFetchState } from './types'

export const useDebounceFetchReducer: UseDebounceFetchReducer = (
  state,
  action
): UseDebounceFetchState => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        idle: false,
        error: false,
        message: '',
      }

    case 'START':
      return {
        ...state,
        pending: true,
      }

    case 'SUCCEED':
      return {
        ...state,
        pending: false,
        succeed: true,
        status: action.payload.status,
        message: action.payload.message,
      }

    case 'ERROR':
      return {
        ...state,
        pending: false,
        succeed: false,
        error: true,
        status: action.payload.status,
        message: action.payload.message,
      }

    default:
      return state
  }
}
