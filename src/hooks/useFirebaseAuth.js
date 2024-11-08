import firebase from 'firebase/app'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useContext, createContext } from 'react'
import 'firebase/auth'

// Inicialize o Firebase (se ainda não tiver feito isso)
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBPDcwFiVnri580RRDablcc5PMJX5ScHXc',
    authDomain: 'firstprojet-115b9.firebaseapp.com',
    projectId: 'firstprojet-115b9',
    storageBucket: 'firstprojet-115b9.firebasestorage.app',
    messagingSenderId: '811112698943',
    appId: '1:811112698943:web:22c709904e3c9ba543148a',
    measurementId: 'G-V1704B7747'
  })
}

const UserContext = createContext({})
// Hook para autenticação Firebase
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Configura um listener para o estado de autenticação
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Função de login
  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error('Erro no login:', error)
      alert(error.message)
    }
  }

  // Função de logout
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.error('Erro no logout:', error)
    }
  }

  // Função de registro
  const register = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
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
// context provide:
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser most be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
