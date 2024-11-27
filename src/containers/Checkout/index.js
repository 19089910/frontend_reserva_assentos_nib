import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import api from '../../services/api'
import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import { Container, Header, MatrizContainer } from './styles'

export function Checkout() {
  const [selectedSeat, setSelectedSeat] = useState([])

  // Gera as linhas de assentos
  const rows = generateRows(5, 35)

  // Manipula a seleção de assentos
  const handleSeatClick = (seatNumber) => {
    setSelectedSeat((prevSelectedSeat) => {
      // Adiciona ou remove o assento do array de selecionados
      if (prevSelectedSeat.includes(seatNumber)) {
        return prevSelectedSeat.filter((seat) => seat !== seatNumber)
      } else {
        return [...prevSelectedSeat, seatNumber]
      }
    })
  }
  // recuperando time do query params
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const time = queryParams.get('time')

  // Envia os assentos selecionados para a API
  const onSubmit = async () => {
    if (selectedSeat.length === 0) {
      alert('Por favor, selecione pelo menos um assento antes de enviar.')
      return
    }
    try {
      const response = await api.post('/seats', {
        seatNumber: selectedSeat,
        time
      })
      alert('Assentos reservados com sucesso!')
      console.log('Resposta da API:', response.data)
    } catch (error) {
      console.error('Erro ao reservar assentos:', error)
      alert('Ocorreu um erro ao reservar os assentos. Tente novamente.')
    }
  }

  return (
    <>
      {console.log(selectedSeat)}
      <Container>
        <Header>
          <h1>Selecione seu Assento</h1>
        </Header>
        <MatrizContainer>
          <div className="transform-component-module_wrapper__7HFJe">
            <div
              style={{ transform: 'translate(0px, 0px) scale(1)' }}
              className="transform-component-module_content__uCDPE"
            >
              {rows.map((seats, index) => (
                <SeatRow
                  key={index}
                  seats={seats}
                  onSeatClick={handleSeatClick}
                  selectedSeat={selectedSeat}
                />
              ))}
            </div>
          </div>
        </MatrizContainer>
        <button onClick={onSubmit}>enviar</button>
      </Container>
    </>
  )
}
