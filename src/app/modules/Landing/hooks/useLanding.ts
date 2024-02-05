import { ChangeEvent, FormEvent, useState } from 'react'

import { createSession, CreateSessionError } from '@app/api'
import { SESSION_TOKEN_KEY } from '@app/constants'
import { AuthorizedApiError } from '@app/services'

export const useLanding = () => {
  const [loading, setLoading] = useState(false)
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
    setLoading(true)

    try {
      const { session_token } = await createSession(email, password)
      localStorage.setItem(SESSION_TOKEN_KEY, session_token)
      window.location.href = '/'
    } catch (error) {
      const { message } = error as AuthorizedApiError<CreateSessionError>
      alert(message)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  }
}
