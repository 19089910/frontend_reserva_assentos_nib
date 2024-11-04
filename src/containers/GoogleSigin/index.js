import React from 'react'

import { Form, HiddenInput, Button, ProviderLogo, ButtonText } from './styles'

function GoogleSignIn() {
  return (
    <Form
      action="https://devtechbarber.vercel.app/api/auth/signin/google"
      method="POST"
    >
      <HiddenInput
        type="hidden"
        name="csrfToken"
        value="d262f0b512d0706cfe57f4d59252fd01f8b76280d983a58e9b544c8dc0f0184a"
      />
      <HiddenInput
        type="hidden"
        name="callbackUrl"
        value="https://devtechbarber.vercel.app/"
      />
      <Button type="submit">
        <ProviderLogo
          loading="lazy"
          height="24"
          width="24"
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google Logo"
        />
        <ProviderLogo
          loading="lazy"
          height="24"
          width="24"
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google Logo Dark"
        />
        <ButtonText>Sign in with Google</ButtonText>
      </Button>
    </Form>
  )
}

export default GoogleSignIn
