import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Checkout, GoogleSign } from '../containers'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/signin" element={<GoogleSign />} />
      </Routes>
    </Router>
  )
}

export default App
