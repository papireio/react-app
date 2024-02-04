import { FormEvent, useEffect, useState } from 'react'

import { createSession } from '@app/api'

import { Input, Panel } from '@lib/components'

import { Button } from '@lib/components/Button/Button'

import css from './styles.css'

export const Landing = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    setLoading(true)

    try {
      const { session_token } = await createSession(email, password)
      localStorage.setItem('session_token', session_token)
      window.location.href = '/'
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  useEffect(() => {
    document.title = 'Papire.io'
  }, [])

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <img src="/logo.svg" alt="logo" />
      <Panel title="Sign in to your account">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Continue</Button>
      </Panel>
    </form>
  )
}
