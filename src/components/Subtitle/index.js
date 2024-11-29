import React from 'react'

import {
  Container,
  Legenda,
  Ul,
  Li,
  Span,
  Label,
  Svg,
  SvgSelect,
  SvgOccupied
} from './styles'
export function Subtitle() {
  return (
    <Container>
      <Legenda>Legenda</Legenda>
      <Ul>
        <Li>
          <Span height="16" width="16" color="#98AAEC">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              fill="inherit"
              className="injected-svg"
              data-src="/static/images/seats/default-format.svg"
            >
              <circle cx="6" cy="6" r="6" width="100%" height="100%"></circle>
            </Svg>
          </Span>
          <Label className="sc-bStcSt fsZKMv">Disponível</Label>
        </Li>
        <Li className="sc-dISpDn hXZYjC">
          <Span height="16" width="16" color="#FFD633">
            <SvgSelect
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              fill="inherit"
              className="injected-svg"
              data-src="/static/images/seats/default-format.svg"
            >
              <circle cx="6" cy="6" r="6" width="100%" height="100%"></circle>
            </SvgSelect>
          </Span>
          <Label className="sc-bStcSt fsZKMv">Selecionado</Label>
        </Li>
        <Li className="sc-dISpDn hXZYjC">
          <Span height="16" width="16" color="#F0F0F0">
            <SvgOccupied
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#fff"
              className="injected-svg"
              data-src="/static/images/seats/used-label.svg"
            >
              <circle
                cx="8.29629"
                cy="8.29629"
                r="7.11111"
                fill="#666666"
              ></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.125 4.25C9.31139 4.25 10.2732 5.22398 10.2732 6.42544C10.2732 7.6269 9.31139 8.60088 8.125 8.60088C6.93861 8.60088 5.97685 7.6269 5.97685 6.42544C5.97685 5.22398 6.93861 4.25 8.125 4.25ZM8.12506 5.06579C7.38357 5.06579 6.78247 5.67453 6.78247 6.42544C6.78247 7.17635 7.38357 7.78509 8.12506 7.78509C8.86655 7.78509 9.46765 7.17635 9.46765 6.42544C9.46765 5.67453 8.86655 5.06579 8.12506 5.06579ZM4.50001 9.34868V11.5921C4.50001 11.8174 4.68034 12 4.90279 12H11.3472C11.5697 12 11.75 11.8174 11.75 11.5921V9.90805C11.75 9.69628 11.59 9.51973 11.3816 9.50164L4.93718 8.94228C4.70203 8.92187 4.50001 9.10967 4.50001 9.34868ZM5.30558 9.79302L10.9445 10.2825V11.1842H5.30558V9.79302Z"
                fill="#FFF"
              ></path>
            </SvgOccupied>
          </Span>
          <Label className="sc-bStcSt fsZKMv">Ocupado</Label>
        </Li>
      </Ul>
    </Container>
  )
}
