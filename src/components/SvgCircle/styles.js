import styled from 'styled-components'

export const Conteiner = styled.svg`
  width: 100%;
  height: 100%;
  cursor: ${(prop) => (prop.disabled ? 'pointer' : '')};

  .i-background {
    fill: ${(prop) => (prop.disabled ? '#98aaec' : '#21262d')};
  }

  .i-border {
    fill: ${(porps) =>
      porps.disabled ? '#98aaec' : '#21262d'}; /* Cor da borda do assento */
  }
`
