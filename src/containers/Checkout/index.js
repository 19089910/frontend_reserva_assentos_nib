import React from 'react'

import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import { Container, Header, MatrizContainer } from './styles'

function Checkout() {
  const rows = generateRows(5, 35)
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
                />
              ))}
            </div>
          </div>
        </MatrizContainer>
        <button>enviar</button>
      </Container>
    </>
  )
}

export default Checkout
