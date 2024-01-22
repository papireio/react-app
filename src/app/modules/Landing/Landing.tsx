import { useState } from 'react'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

import { createSession } from '@app/api'

import style from './style.scss'

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

  return (
    <Card
      title="Login"
      subTitle="Login"
      footer={
        <Button onClick={handleLogin} loading={loading}>
          Login
        </Button>
      }
      pt={{
        content: {
          className: style.container,
        },
      }}
    >
      <InputText
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Card>
  )
}
