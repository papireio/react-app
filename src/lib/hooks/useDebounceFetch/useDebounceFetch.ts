import { useReducer, useRef } from 'react'

import { FetchResult, useDebounceFetchState } from '@lib/hooks'
import { useDebounceFetchReducer } from '@lib/hooks/useDebounceFetch/reducer'

export const useDebounceFetch = (delay = 250) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  const [state, dispatch] = useReducer(
    useDebounceFetchReducer,
    useDebounceFetchState
  )

  const handleStart = () => {
    dispatch({ type: 'INIT' })

    timeout.current = setTimeout(() => {
      dispatch({ type: 'START' })
    }, delay)
  }

  const handleSucceed = (payload: FetchResult) => {
    clearTimeout(timeout.current)
    dispatch({ type: 'SUCCEED', payload })
  }

  const handleError = (payload: FetchResult) => {
    clearTimeout(timeout.current)
    dispatch({ type: 'ERROR', payload })
  }

  return {
    ...state,
    handleStart,
    handleError,
    handleSucceed,
  }
}
