import { User } from '@app/models/User'

import { GenericAction } from '@lib/types/state'

export type AppState = {
  user: User
}

export type AppStateAction = GenericAction<'SET_USER', User>
