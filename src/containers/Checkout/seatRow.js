import PropTypes from 'prop-types'
import React from 'react'

import { SvgCircle } from '../../components/SvgCircle'
import { RowContainer, SeatContainer, RowLabel } from './styles'

function SeatRow({ seats }) {
  return (
    <RowContainer>
      <RowLabel>{seats[0].charAt(0)}</RowLabel>
      {seats.map((seat, index) => (
        <SeatContainer key={index}>
          <SvgCircle /> {/* Use o componente SvgCircle aqui */}
        </SeatContainer>
      ))}
    </RowContainer>
  )
}

SeatRow.propTypes = {
  seats: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SeatRow
