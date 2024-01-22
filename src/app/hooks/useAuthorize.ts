import { useContext } from 'react'

import { GetAuthorizedUserError, getAuthorizedUser } from '@app/api'
import { AppStateContext } from '@app/context'
import { AuthorizedApiError } from '@app/services'

export const useAuthorize = () => {
  const { dispatch, state } = useContext(AppStateContext)
  const { fetching } = state

  const isLoading = fetching.pending && !fetching.idle

  const isAuthorized = !isLoading && fetching.succeed
  const isUnauthorized =
    !isLoading && fetching.error?.message === 'unauthorized'
  const isError = fetching.error?.message === 'internal_server_error'

  const fetchAuthorizedUser = async () => {
    dispatch({ type: 'FETCH_USER_START' })

    try {
      const payload = await getAuthorizedUser()
      dispatch({ type: 'FETCH_USER_SUCCESS', payload })
    } catch (error) {
      dispatch({
        type: 'FETCH_USER_ERROR',
        payload: error as AuthorizedApiError<GetAuthorizedUserError>,
      })
    }
  }

  return {
    isLoading,
    isAuthorized,
    isUnauthorized,
    isError,
    fetchAuthorizedUser,
  }
}
