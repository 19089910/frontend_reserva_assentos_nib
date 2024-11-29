import styled from 'styled-components'

export const Conteiner = styled.svg`
  width: 100%;
  height: 100%;
  cursor: ${(prop) => (prop.disabled ? 'pointer' : '')};
  padding: 0px;
  fill: rgb(255, 255, 255) !important;
`
export const Circle = styled.circle`
  transition: 200ms;
  fill: ${(props) =>
    props.occupiedSeat
      ? 'rgb(102, 102, 102)'
      : props.isSelected
        ? 'rgb(255, 214, 51)'
        : '#98aaec'};
`
export const Path = styled.path`
  fill: ${(props) =>
    props.occupiedSeat
      ? 'rgb(102, 102, 102)'
      : props.isSelected
        ? 'rgb(255, 214, 51)'
        : '#98aaec'};
`
