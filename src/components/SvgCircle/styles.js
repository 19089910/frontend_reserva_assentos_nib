import styled from 'styled-components'

export const Conteiner = styled.svg`
  width: 100%;
  height: 100%;
  cursor: ${(prop) => (prop.disabled ? 'pointer' : '')};
`
export const Circle = styled.circle`
  transition: 200ms;
  fill: ${(props) =>
    props.disabled
      ? '#21262d'
      : props.isSelected
        ? 'rgb(255, 214, 51)'
        : '#98aaec'};
`
export const Path = styled.path`
  fill: ${(props) =>
    props.disabled
      ? '#21262d'
      : props.isSelected
        ? 'rgb(255, 214, 51)'
        : '#98aaec'};
`
