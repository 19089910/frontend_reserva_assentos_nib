import PropTypes from 'prop-types'
import React from 'react'

import { SvgCircle } from './../../components/SvgCircle'
import { ReactTransformComponent, RowLabel, Circle, Span, Text } from './styles'

function SeatRow({ seats, onSeatClick, selectedSeat, occupiedSeat }) {
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
            onClick={() =>
              !occupiedSeat.includes(seat.seatNumber) &&
              onSeatClick(seat.seatNumber)
            }
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
                    occupiedSeat={occupiedSeat.includes(seat.seatNumber)}
                    disabled={seat.disabled}
                    isSelected={selectedSeat.includes(seat.seatNumber)}
                  />
                </div>
              </Span>
            )}

            {/* Renderiza o ícone de assento ocupado */}
            {seat.seatNumber !== null &&
              occupiedSeat.includes(seat.seatNumber) && (
                <Span className="parsonScale">
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="injected-svg"
                      >
                        <path d="M12.1 0C15 0 17 1.5 17.8 4.2c.3 1 .4 1.8.4 3v.4c.4 2.1 0 4-1.1 5.6l1 .4.6.2 2.9 1c.1 0 .1.1.2.1.3.2.6.4.9.7.6.6.9 1.3.9 2.1v3.6c0 1.6-1.2 2.8-2.7 2.9H3.3c-1.7 0-2.9-1-3.1-2.7v-3.6c0-1.3.7-2.3 2-2.9l.2-.1h.1l4.6-1.6-.2-.3c-.9-1.6-1.3-3.5-1-5l.1-.4v-.5c0-1.2 0-1.8.2-2.6C6.8 1.6 8.8 0 12.1 0zm0 2.5C10 2.5 9 3.3 8.7 5c-.1.5-.2.9-.2 1.6v1.3l-.1.3c-.3 1.5.4 3.5 1.6 4.6.7.6.6 1.6-.2 2l-.1.1h-.1L3.4 17c-.4.2-.6.4-.6.6v3.5c.1.4.1.4.4.5H21c.2 0 .3-.1.3-.2v-3.6c0-.2-.1-.3-.3-.5l-.2-.3-3.1-1c-1.3-.5-2.2-.8-2.8-1l-.2-.1-.2-.1c-.6-.3-.9-1.1-.6-1.7l.1-.1.1-.1.8-1 .1-.2c.7-1.1 1-2.3.7-3.9v-.7c0-.9-.1-1.6-.3-2.3-.5-1.5-1.5-2.3-3.3-2.3z"></path>
                      </svg>{' '}
                    </div>
                  </div>
                </Span>
              )}

            {/* Texto dentro do SVG */}
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
          </Circle>{' '}
          {/* Renderiza RowLabel no final da linha */}
          {index === seats.length - 1 && (
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
  onSeatClick: PropTypes.func.isRequired,
  selectedSeat: PropTypes.arrayOf(PropTypes.string).isRequired,
  occupiedSeat: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SeatRow
