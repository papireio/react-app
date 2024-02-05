import { ChangeEvent, FormEvent, useState } from 'react'

import { createSession, CreateSessionError } from '@app/api'
import { SESSION_TOKEN_KEY } from '@app/constants'
import { AuthorizedApiError } from '@app/services'

import { useDebounceFetch } from '@lib/hooks'

export const useLanding = () => {
  const {
    error,
    handleError,
    handleSucceed,
    handleStart,
    succeed,
    idle,
    status,
    pending,
  } = useDebounceFetch()

  const isLoading = !idle && pending
  const isWrongPassword = !succeed && error && status === 403
  const isUnhandledError = !isWrongPassword && error

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setEmail(target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setPassword(target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    handleStart()

    try {
      const { session_token } = await createSession(email, password)
      localStorage.setItem(SESSION_TOKEN_KEY, session_token)
      window.location.href = '/'
      handleSucceed({ status: 200 })
    } catch (error) {
      handleError(error as AuthorizedApiError<CreateSessionError>)
    }
  }

  return {
    isLoading,
    isWrongPassword,
    isUnhandledError,
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  }
}
