import PropTypes from 'prop-types'
import React from 'react'

import { SvgCircle } from './../../components/SvgCircle'
import { ReactTransformComponent, RowLabel, Circle, Span, Text } from './styles'

function SeatRow({ seats, onSeatClick, selectedSeat }) {
  return (
    <ReactTransformComponent>
      {seats.map((seat, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <RowLabel data-testid="seat-map-row" className="sc-dChVcU oFTsR">
              {seat.rowLabel}
            </RowLabel>
          )}

          <Circle
            onClick={() => onSeatClick(seat.seatNumber)}
            className={
              selectedSeat.includes(seat.seatNumber) ? 'dnWEgS' : 'kjQfvk'
            }
            data-testid={
              selectedSeat.includes(seat.seatNumber)
                ? 'seat-selected'
                : 'seat-available'
            }
          >
            {seat.disabled && (
              <Span height="100" width="100" className="icon">
                <div data-testid="svg-element" style={{ fontSize: '0px' }}>
                  <SvgCircle
                    disabled={seat.disabled}
                    isSelected={selectedSeat.includes(seat.seatNumber)}
                  />
                </div>
              </Span>
            )}
            {/* Texto dentro do SVG (personalize conforme necessário) */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 24"
              className={
                selectedSeat.includes(seat.seatNumber)
                  ? 'dnWEgS efecth'
                  : 'sc-rPWID efecth'
              }
            >
              {selectedSeat.includes(seat.seatNumber) && (
                <Text x="50%" y="50%">
                  {seat.seatNumber}
                </Text>
              )}
            </svg>
          </Circle>
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
  onSeatClick: PropTypes.func.isRequired,
  selectedSeat: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SeatRow
