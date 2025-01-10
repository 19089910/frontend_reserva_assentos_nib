import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import AppProvider from './hooks'
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
    <AppProvider>
      <ResponsiveDiv>
        <Header />
        <Routes />
        <Footer />
      </ResponsiveDiv>
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
