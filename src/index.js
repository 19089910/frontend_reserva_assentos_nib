import React from 'react'
import ReactDOM from 'react-dom/client'

// import Checkout from '../src/containers/Checkout'
import GoogleSign from './containers/GoogleSign'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GoogleSign />
    <GlobalStyles />
  </>
)
