// src/containers/Checkout/seatRow.js
import PropTypes from 'prop-types'
import React from 'react'

import { SvgCircle } from '../../components/SvgCircle'

function SeatRow({ seats }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {seats.map((seat, index) => (
        <SvgCircle key={index} />
      ))}
    </div>
  )
}

SeatRow.propTypes = {
  seats: PropTypes.array.isRequired
}

export default SeatRow
