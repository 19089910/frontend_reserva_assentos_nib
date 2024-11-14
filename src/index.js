import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header'
import { UserProvider } from './hooks/useFirebaseAuth'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Header />
      <Routes />
    </UserProvider>
    <GlobalStyles />
  </>
)
