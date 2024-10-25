import React, { useState } from 'react'

import { generateRows } from '../../util/GenerateRows'
import SeatRow from './seatRow'
import { Container, Header, MatrizContainer } from './styles'

function Checkout() {
  const [selectedSeat, setSelectedSeat] = useState([])

  const rows = generateRows(5, 35)
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
        <button>enviar</button>
      </Container>
    </>
  )
}

export default Checkout
