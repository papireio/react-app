import { useEffect } from 'react'

import {
  StyledInputs,
  StyledLandingContainer,
  StyledLandingForm,
  StyledLogo,
} from '@app/modules/Landing/styled'

import { Input, Panel } from '@lib/components'

import { Button } from '@lib/components/Button/Button'

import { useLanding } from './hooks'

export const Landing = () => {
  const {
    isLoading,
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
    <StyledLandingContainer>
      <StyledLogo src="/logo.svg" alt="logo" />
      <Panel title="Sign in to your account">
        <StyledLandingForm onSubmit={handleSubmit}>
          <StyledInputs>
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
          </StyledInputs>
          <Button type="submit" loading={isLoading}>
            Continue
          </Button>
        </StyledLandingForm>
      </Panel>
    </StyledLandingContainer>
  )
}
