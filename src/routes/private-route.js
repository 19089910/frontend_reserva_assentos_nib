import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import paths from '../constants/paths'
import { useUser } from '../hooks/authProvider'
import isTokenExpired from './tokenExpired'

function PrivateRoute() {
  const { user } = useUser()
  const location = useLocation()

  // Verificando se o nome do caminho atual está presente nos valores do objeto paths
  const isAdminPage = Object.values(paths).includes(location.pathname)
  const userData = JSON.parse(user)
  const token = userData?.token

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem('codeburger:userData')
    return <Navigate to="/" />
  }

  if (isAdminPage && !JSON.parse(user).admin) {
    return <Navigate to="/pedidos" />
  }

  return (
    <>
      {!isAdminPage && <Header />}
      <Outlet />
    </>
  )
}

export default PrivateRoute
