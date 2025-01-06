import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { useUser } from '../../hooks/authProvider'
import { Page, Signin, Card, ProviderButton, ProviderLogo } from './styles'

export function GoogleSign() {
  const { login } = useUser()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault() // Impede o envio do formulário
    try {
      await login()
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <Page>
      <Signin>
        <Card>
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="csrfToken"
              value="d262f0b512d0706cfe57f4d59252fd01f8b76280d983a58e9b544c8dc0f0184a"
            />
            <input
              type="hidden"
              name="callbackUrl"
              value="https://localhost:3000"
            />
            <ProviderButton type="submit">
              <ProviderLogo
                loading="lazy"
                height="24"
                width="24"
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google Logo"
              />
              <span>Sign in with Google</span>
            </ProviderButton>
          </form>
        </Card>
      </Signin>
      <ToastContainer />
    </Page>
  )
}
