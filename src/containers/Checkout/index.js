import React from 'react'

import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import { Container, Header, MatrizContainer, Stage } from './styles'

function Checkout() {
  /* const rows = [
    [
      // Linha 1
      { seatNumber: 'A1', disabled: true },
      { seatNumber: 'A2', disabled: false },
      { seatNumber: 'A3', disabled: true }
    ],
    [
      // Linha 2 (exemplo)
      { seatNumber: 'B1', disabled: false },
      { seatNumber: 'B2', disabled: false },
      { seatNumber: 'B3', disabled: true }
    ]
  ] */
  const rows = generateRows(30, 17)

  const handleSeatClick = (seatNumber) => {
    console.log(`Seat selected: ${seatNumber}`)
  }

  return (
    <>
      {console.log(rows)}
      <Container>
        <Header>
          <h1>Selecione seu Assento</h1>
        </Header>
        <MatrizContainer>
          <div className="react-transform-wrapper transform-component-module_wrapper__7HFJe ">
            <Stage>tela</Stage>
            {rows.map((seats, index) => (
              <SeatRow
                key={index}
                seats={seats}
                onSeatClick={handleSeatClick}
              />
            ))}
          </div>
        </MatrizContainer>
      </Container>
    </>
  )
}

export default Checkout
