import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const SeatContext = createContext({})

export const SeatProvider = ({ children }) => {
  const [seatsInfo, setSeatsInfo] = useState({})

  // Função para atualizar o localStorage
  const updateLocalStorage = async (seats) => {
    const storedSeats = await localStorage.setItem(
      'ingresso:seatSelection',
      JSON.stringify(seats)
    )
    if (storedSeats) {
      setSeatsInfo(JSON.parse(storedSeats))
    }
  }

  // Função para carregar os assentos selecionados do localStorage ao iniciar
  useEffect(() => {
    const loadUserData = async () => {
      const storedSeats = await localStorage.getItem('ingresso:seatSelection')
      if (storedSeats) {
        setSeatsInfo(JSON.parse(storedSeats))
      }
    }
    loadUserData()
  }, [])

  return (
    <SeatContext.Provider value={{ seatsInfo, updateLocalStorage }}>
      {children}
    </SeatContext.Provider>
  )
}

export const useSeats = () => {
  const context = useContext(SeatContext)
  if (!context) {
    throw new Error('useSeats must be used within a SeatProvider')
  }
  return context
}

SeatProvider.propTypes = {
  children: PropTypes.node
}
