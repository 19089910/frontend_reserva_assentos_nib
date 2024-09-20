import PropTypes from 'prop-types'
import React from 'react'

import { SvgCircle } from './../../components/SvgCircle'
import { ReactTransformComponent, RowLabel, Circle } from './styles'

function SeatRow({ seats, onSeatClick }) {
  return (
    <ReactTransformComponent className=" transform-component-module_content__uCDPE ">
      {seats.map((seat, index) => (
        <React.Fragment type="Regular" key={index}>
          {index === 0 && (
            <RowLabel data-testid="seat-map-row" className="sc-dChVcU oFTsR">
              {seat.rowLabel}
            </RowLabel>
          )}

          <Circle data-testid="svg-element">
            <SvgCircle
              disabled={seat.disabled}
              onClick={() => onSeatClick(seat.seatNumber)}
            />
          </Circle>
        </React.Fragment>
      ))}
      {seats.map((seat, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <RowLabel data-testid="seat-map-row" className="sc-dChVcU oFTsR">
              {seat.rowLabel}
            </RowLabel>
          )}
        </React.Fragment>
      ))}
    </ReactTransformComponent>
  )
}

// Definindo os propTypes
SeatRow.propTypes = {
  seats: PropTypes.arrayOf(
    PropTypes.shape({
      seatNumber: PropTypes.string.isRequired,
      isAvailable: PropTypes.bool.isRequired
    })
  ).isRequired,
  onSeatClick: PropTypes.func.isRequired
}

export default SeatRow
