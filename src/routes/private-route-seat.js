import React, { useState, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function PrivateRouteSeat() {
  const location = useLocation()
  const [isSeatsInfo, setIsSeatsInfo] = useState(null)

  const paths = { Shows: '/', Checkout: '/reserva' }
  const isRestrictedPath = Object.values(paths).includes(location.pathname)

  useEffect(() => {
    const loadUserData = async () => {
      const storedSeats = localStorage.getItem('ingresso:seatSelection')
      if (storedSeats) {
        // Apenas verifica se o dado existe
        setIsSeatsInfo(true)
      } else {
        setIsSeatsInfo(false)
      }
    }
    loadUserData()
  }, [])
  console.log(localStorage.getItem('ingresso:seatSelection'))
  console.log(isSeatsInfo)

  if (!isSeatsInfo && !isRestrictedPath) {
    return <Navigate to="/" />
  }

  if (isSeatsInfo && isRestrictedPath) {
    return <Navigate to="/checkin" />
  }

  return <Outlet />
}

export default PrivateRouteSeat
