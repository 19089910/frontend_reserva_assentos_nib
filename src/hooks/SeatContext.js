import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const SeatContext = createContext({})

export const SeatProvider = ({ children }) => {
  const [seatsInfo, setSeatsInfo] = useState({})

  // Atualiza o localStorage e o estado
  const updateLocalStorage = async (seats) => {
    await localStorage.setItem('ingresso:seatSelection', JSON.stringify(seats))
    setSeatsInfo(seats)
  }

  // Função para remover os dados do usuário ao fazer logout
  const clearSeatsInfo = async () => {
    await localStorage.removeItem('ingresso:seatSelection')
    setSeatsInfo({})
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
    <SeatContext.Provider
      value={{ seatsInfo, updateLocalStorage, clearSeatsInfo }}
    >
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
