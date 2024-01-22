import { FetchingError } from './types'

export class AuthorizedApiError<T extends string> implements FetchingError {
  public message: T
  public status: number
  public name: string

  constructor(status: number, message: T) {
    this.message = message
    this.status = status
  }
}
