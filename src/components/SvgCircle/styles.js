import styled from 'styled-components'

export const Conteiner = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
  .i-background {
    fill: ${(porps) => (porps.disabled ? '#98aaec' : '#21262d')};
  }

  .i-border {
    fill: ${(porps) =>
      porps.disabled ? '#98aaec' : '#21262d'}; /* Cor da borda do assento */
  }
`
