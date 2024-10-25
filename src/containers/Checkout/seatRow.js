import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { SvgCircle } from './../../components/SvgCircle'
import {
  ReactTransformComponent,
  RowLabel,
  Circle,
  SpanEx,
  Text
} from './styles'

function SeatRow({ seats, onSeatClick }) {
  // Gerenciando o estado do assento selecionado
  const [selectedSeat, setSelectedSeat] = useState(null)

  const handleSeatClick = (seatNumber) => {
    // Atualiza o estado com o número do assento selecionado
    setSelectedSeat(seatNumber)
    onSeatClick(seatNumber) // Chama o callback passado via props
  }

  return (
    <ReactTransformComponent>
      {seats.map((seat, index) => (
        <React.Fragment type="Regular" key={index}>
          {index === 0 && (
            <RowLabel data-testid="seat-map-row" className="sc-dChVcU oFTsR">
              {seat.rowLabel}
            </RowLabel>
          )}

          <Circle>
            <div
              className={selectedSeat === seat.seatNumber ? 'dnWEgS' : 'kjQfvk'}
              data-testid={
                selectedSeat === seat.seatNumber
                  ? 'seat-selected'
                  : 'seat-available'
              }
            >
              <SpanEx
                height="100"
                width="100"
                className="sc-dhKdcB eVTepf iconFormat"
                data-testid="icon-element"
              >
                <div data-testid="svg-element">
                  <div>
                    <SvgCircle
                      disabled={seat.disabled}
                      onClick={() => handleSeatClick(seat.seatNumber)}
                      isSelected={selectedSeat === seat.seatNumber}
                    />
                  </div>
                </div>
              </SpanEx>
              {/* Texto dentro do SVG (personalize conforme necessário) */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 24"
                className={
                  selectedSeat === seat.seatNumber
                    ? 'dnWEgS efecth'
                    : 'sc-rPWID efecth'
                }
              >
                {selectedSeat === seat.seatNumber && (
                  <Text x="50%" y="50%">
                    {seat.seatLabel || ''}
                  </Text>
                )}
              </svg>
            </div>
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

SeatRow.propTypes = {
  seats: PropTypes.arrayOf(
    PropTypes.shape({
      seatNumber: PropTypes.string.isRequired,
      rowLabel: PropTypes.string,
      seatLabel: PropTypes.string,
      disabled: PropTypes.bool.isRequired,
      isAvailable: PropTypes.bool.isRequired
    })
  ).isRequired,
  onSeatClick: PropTypes.func.isRequired
}

export default SeatRow
