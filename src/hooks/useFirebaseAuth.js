// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useContext, createContext } from 'react'

// Inicialize o Firebase
const app = initializeApp({
  apiKey: 'AIzaSyBPDcwFiVnri580RRDablcc5PMJX5ScHXc',
  authDomain: 'firstprojet-115b9.firebaseapp.com',
  projectId: 'firstprojet-115b9',
  storageBucket: 'firstprojet-115b9.appspot.com',
  messagingSenderId: '811112698943',
  appId: '1:811112698943:web:22c709904e3c9ba543148a',
  measurementId: 'G-V1704B7747'
})

const auth = getAuth(app)
const UserContext = createContext({})
const googleProvider = new GoogleAuthProvider()

// Hook para autenticação Firebase
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Configura um listener para o estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Função de login
  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error('Erro no login com Google:', error)
      alert(error.message)
    }
  }
  // Função de logout
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Erro no logout:', error)
    }
  }

  // Função de registro
  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error('Erro no registro:', error)
      alert(error.message)
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
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
