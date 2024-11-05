import React from 'react'

import { Page, Signin, Card, ProviderButton, ProviderLogo } from './styles'

function GoogleSign() {
  return (
    <Page>
      <Signin>
        <Card>
          <form
            action="https://devtechbarber.vercel.app/api/auth/signin/google"
            method="POST"
          >
            <input
              type="hidden"
              name="csrfToken"
              value="d262f0b512d0706cfe57f4d59252fd01f8b76280d983a58e9b544c8dc0f0184a"
            />
            <input
              type="hidden"
              name="callbackUrl"
              value="https://devtechbarber.vercel.app/"
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
    </Page>
  )
}

export default GoogleSign
