import React from 'react'

import { Conteiner } from './styles'

export function SvgCircle() {
  return (
    <Conteiner data-testid="svg-element">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="injected-svg"
        data-src="/static/images/seats/formats/circle.svg"
      >
        <circle className="i-background" cx="12" cy="12" r="12" />
        <path
          className="i-border"
          d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0zm.1 2.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-5.6-4.5-10-10-10z"
        />
      </svg>
    </Conteiner>
  )
}
