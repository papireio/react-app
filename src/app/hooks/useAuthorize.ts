import { useContext } from 'react'

import { GetAuthorizedUserError, getAuthorizedUser } from '@app/api'
import { AppStateContext } from '@app/context'
import { AuthorizedApiError } from '@app/services'

import { useDebounceFetch } from '@lib/hooks'

export const useAuthorize = () => {
  const { dispatch } = useContext(AppStateContext)
  const {
    error,
    handleError,
    handleStart,
    handleSucceed,
    idle,
    pending,
    status,
    succeed,
  } = useDebounceFetch()

  const isLoading = !idle && pending
  const isAuthorized = !isLoading && succeed && status === 200
  const isUnauthorized = (!isLoading && error && status === 403) || idle
  const isError = !isUnauthorized && error

  const fetchAuthorizedUser = async () => {
    handleStart()

    try {
      const payload = await getAuthorizedUser()
      dispatch({ type: 'SET_USER', payload })
      handleSucceed({ status: 200 })
    } catch (error) {
      handleError(error as AuthorizedApiError<GetAuthorizedUserError>)
    }
  }

  return {
    isAuthorized,
    isUnauthorized,
    isLoading,
    isError,
    fetchAuthorizedUser,
  }
}
