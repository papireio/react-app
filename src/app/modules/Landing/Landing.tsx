import { useEffect, useState } from 'react'

import { createSession } from '@app/api'

import { Input, Panel } from '@lib/components'

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

  useEffect(() => {
    document.title = 'papireio'
  }, [])

  return (
    <div className={css.container}>
      <img src="/logo.svg" alt="logo" />
      <Panel title="Sign in to your account">
        <Input type="email" />
        <Input type="password" />
        <button>Continue</button>
      </Panel>
    </div>
  )
}
