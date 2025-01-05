import React, { useState, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import { auth } from '../config/firebase'
import paths from '../constants/paths'
import { useUser } from '../hooks/authProvider'
import isTokenExpired from './tokenExpired'

function PrivateRoute() {
  const { user } = useUser()
  const location = useLocation()
  const [isAdmin, setIsAdmin] = useState(null)

  // Verificando se o nome do caminho atual está presente nos valores do objeto paths
  const isAdminPage = Object.values(paths).includes(location.pathname)
  const token = user?.uid
  useEffect(() => {
    const fetchClaims = async () => {
      if (!token) {
        // || isTokenExpired(token)) {
        setIsAdmin(false)
        return
      }

      try {
        const idTokenResult = await auth.currentUser.getIdTokenResult()

        setIsAdmin(idTokenResult.claims.admin || false)
      } catch (error) {
        console.error('Erro ao verificar claims:', error)
        setIsAdmin(false)
      }
    }

    fetchClaims()
  }, [token])

  // Exibe um estado de carregamento enquanto verifica as claims
  if (isAdmin === null) {
    return <div>Carregando...</div>
  }

  if (!token) {
    return <Navigate to="/" />
  }

  if (isAdminPage && !isAdmin) {
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
