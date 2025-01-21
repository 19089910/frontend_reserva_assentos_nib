import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useSeats } from '../hooks/SeatContext'

function PrivateRouteSeat() {
  const { seatsInfo } = useSeats()
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  const paths = { Shows: '/', Checkout: '/reserva' }
  const isRestrictedPath = Object.values(paths).includes(location.pathname)

  useEffect(() => {
    // Simula o carregamento inicial
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  const hasSeatsInfo = Object.keys(seatsInfo).length > 0
  console.log(seatsInfo)

  if (!hasSeatsInfo && !isRestrictedPath) {
    return <Navigate to="/" />
  }

  if (hasSeatsInfo && isRestrictedPath) {
    return <Navigate to="/checkin" />
  }

  return <Outlet />
}

export default PrivateRouteSeat
