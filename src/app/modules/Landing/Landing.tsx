import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { createSession, CreateSessionError } from '@app/api'

import { AuthorizedApiError } from '@app/services'

import { Input, Panel } from '@lib/components'

import { Button } from '@lib/components/Button/Button'

import css from './styles.css'

export const Landing = () => {
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
      localStorage.setItem('session_token', session_token)
      window.location.href = '/'
    } catch (error) {
      const { message } = error as AuthorizedApiError<CreateSessionError>
      alert(message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Papire.io'
  }, [])

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <img src="/logo.svg" alt="logo" />
      <Panel title="Sign in to your account">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" loading={loading}>
          Continue
        </Button>
      </Panel>
    </form>
  )
}
