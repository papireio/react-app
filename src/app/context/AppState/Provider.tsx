import { PropsWithChildren, useMemo, useReducer } from 'react'

import { AppStateContext, initialAppState } from './constants'
import { appStateReducer } from './reducer'

export const AppStateProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(appStateReducer, initialAppState)

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}
