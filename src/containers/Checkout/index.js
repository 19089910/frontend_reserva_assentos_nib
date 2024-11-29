import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import api from '../../services/api'
import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import {
  Container,
  Header,
  MatrizContainer,
  Stage,
  Detail,
  FooderWrapper,
  FooderContainer,
  ButtonContainer,
  Button
} from './styles'

export function Checkout() {
  const [selectedSeat, setSelectedSeat] = useState([])
  const [occupiedSeat, setOccupiedSeat] = useState([])
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
  // recupenrando acentos ocupados
  useEffect(() => {
    const reserveSeats = async () => {
      const response = await api.get('/seats')
      const filteredSeats = response.data.filter(
        (item) => item.showDateTime === time
      )
      const seatNumbers = filteredSeats.map((item) => item.seatNumber)
      const allSeatNumbers = seatNumbers.flat()
      setOccupiedSeat(allSeatNumbers) // Exibe uma lista de arrays de seatNumbers
    }
    reserveSeats()
  }, [time])

  // Envia os assentos selecionados para a API
  const onSubmit = async () => {
    if (selectedSeat.length === 0) {
      alert('Por favor, selecione pelo menos um assento antes de enviar.')
      return
    }
    try {
      const response = await api.post('/seats', {
        seatNumber: selectedSeat,
        showDateTime: time
      })
      alert('Assentos reservados com sucesso!')
      console.log('Resposta da API:', response.data)
    } catch (error) {
      console.error('Erro ao reservar assentos:', error)
      alert('Ocorreu um erro ao reservar os assentos. Tente novamente.')
    }
  }

  return (
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
            <Stage>
              <Detail />
              Palco
              <Detail className="right" />
            </Stage>
            {rows.map((seats, index) => (
              <SeatRow
                key={index}
                seats={seats}
                onSeatClick={handleSeatClick}
                selectedSeat={selectedSeat}
                occupiedSeat={occupiedSeat}
              />
            ))}
          </div>
        </div>
      </MatrizContainer>
      <FooderContainer>
        <FooderWrapper>
          <div className="sc-epqpcT jxwyXi">
            <div>
              <span data-testid="button-resume" className="sc-bvgPty gRGfQR">
                <span
                  height="24"
                  width="24"
                  className="sc-kpDqfm daulnc icon-resume"
                  data-testid="icon-element"
                >
                  <div data-testid="svg-element" role="img">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="inherit"
                        className="injected-svg"
                        data-src="/static/images/icons/arrow.svg"
                      >
                        <path d="M6.50539 15.7448C6.17025 16.0929 5.61633 16.1035 5.26818 15.7683C4.92002 15.4332 4.90947 14.8793 5.24461 14.5311L12.0128 7.49999L18.7565 14.5323C19.091 14.8811 19.0794 15.435 18.7306 15.7695C18.3818 16.104 17.8279 16.0924 17.4935 15.7436L12.0104 10.0259L6.50539 15.7448Z"></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
          <ButtonContainer className="sc-kUdmhA cLBwKV">
            <Button
              className="sc-dAlyuH csTJrN button-next-footer"
              onClick={onSubmit}
            >
              Escolher Ingressos
            </Button>
          </ButtonContainer>
        </FooderWrapper>
      </FooderContainer>
    </Container>
  )
}
