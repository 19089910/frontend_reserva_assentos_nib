import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

import { Header } from './components/Header'
import { UserProvider } from './hooks/useFirebaseAuth'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const ResponsiveDiv = styled.div`
  overflow-x: hidden;

  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 65px; //120px;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <ResponsiveDiv>
        <Header />
        <Routes />
      </ResponsiveDiv>
    </UserProvider>
    <GlobalStyles />
  </>
)
