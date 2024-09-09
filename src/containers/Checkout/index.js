import React from 'react'

import SeatRow from './seatRow'
import { CheckoutContainer } from './styles'

function Checkout() {
  const rows = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4'],
    ['C1', 'C2', 'C3', 'C4']
  ]

  return (
    <CheckoutContainer>
      <h1>Selecione seu Assento</h1>
      {rows.map((seats, index) => (
        <SeatRow key={index} seats={seats} />
      ))}
    </CheckoutContainer>
  )
}

export default Checkout
