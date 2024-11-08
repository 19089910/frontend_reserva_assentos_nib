import React from 'react'
import ReactDOM from 'react-dom/client'

import { UserProvider } from './hooks/useFirebaseAuth'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <GlobalStyles />
  </>
)
