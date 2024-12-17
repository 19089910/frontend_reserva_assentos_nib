import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { toast } from 'react-toastify'

import { auth, googleProvider } from '../config/firebase'

const UserContext = createContext({})

// Hook para autenticação Firebase
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Estado do usuário
  const [loading, setLoading] = useState(true) // Carregamento inicial

  // Função de login com Google
  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      toast.success('Login realizado com sucesso!')
    } catch (error) {
      console.error('Erro ao fazer login:', error.message)
      toast.error('Erro ao fazer login, tente novamente.')
    }
  }

  // Função de logout
  const logout = async () => {
    try {
      await signOut(auth)
      toast.success('Logout realizado com sucesso!')
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message)
      toast.error('Erro ao fazer logout, tente novamente.')
    }
  }

  // Observa mudanças no estado do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false) // Finaliza carregamento
    })

    return () => unsubscribe() // Cleanup do observer
  }, [])

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {!loading && children} {/* Só renderiza as crianças após carregar */}
    </UserContext.Provider>
  )
}

// Hook de contexto
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser deve ser usado dentro do UserProvider')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
