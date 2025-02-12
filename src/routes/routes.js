import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Checkout, GoogleSign, Shows, Admin, Reservation } from '../containers'
import PrivateRoute from './private-route'
import PrivateRouteSeat from './private-route-seat'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<GoogleSign />} />
        <Route element={<PrivateRouteSeat />}>
          <Route path="/" element={<Shows />} />
          <Route path="/reserva" element={<Checkout />} />
          <Route path="/checkin" element={<Reservation />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={paths.Order} index element={<Admin />} />
          <Route path={paths.Shows} index element={<Admin />} />
          <Route path={paths.NewShow} index element={<Admin />} />
          <Route path={paths.EditShow} index element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
