import { useEffect } from 'react'

import { Input, Panel } from '@lib/components'

import { Button } from '@lib/components/Button/Button'

import { useLanding } from './hooks'

export const Landing = () => {
  const {
    loading,
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLanding()

  useEffect(() => {
    document.title = 'Papire.io'
  }, [])

  return (
    <form onSubmit={handleSubmit}>
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
