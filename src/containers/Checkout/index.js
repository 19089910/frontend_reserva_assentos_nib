import { Padding } from '@mui/icons-material'
import React from 'react'

import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import { Container, Header, MatrizContainer } from './styles'

function Checkout() {
  const rows = generateRows(5, 30)

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
  return (
    <>
      {console.log(rows)}
      <Container>
        <Header>
          <h1>Selecione seu Assento</h1>
        </Header>
        <MatrizContainer>
          <div className="react-transform-wrapper transform-component-module_wrapper__7HFJe ">
            {rows.map((seats, index) => (
              <SeatRow key={index} seats={seats} />
            ))}
          </div>
        </MatrizContainer>
      </Container>
    </>
  )
}

export default Checkout
