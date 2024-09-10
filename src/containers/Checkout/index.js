// src/containers/Checkout/index.js
import React from 'react'

import SeatRow from './seatRow'
import { Container, Header, MatrizContainer, StageContainer } from './styles'

function Checkout() {
  const rows = 24 // Número total de assentos por linha
  const rowCount = 16 // Número total de linhas

  // Criando uma matriz de assentos
  const seatRows = Array.from({ length: rowCount }, (_, i) =>
    Array.from(
      { length: rows },
      (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`
    )
  )

  return (
    <Container>
      <Header>
        <h1>Selecione seu Assento</h1>
      </Header>
      <MatrizContainer>
        {seatRows.map((seats, index) => (
          <SeatRow key={index} seats={seats} />
        ))}
      </MatrizContainer>
      <StageContainer>Tela</StageContainer>
    </Container>
  )
}

export default Checkout
