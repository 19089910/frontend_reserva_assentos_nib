import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  .i-background {
    fill: #ccc; /* Cor de fundo do assento */
  }

  .i-border {
    fill: #000; /* Cor da borda do assento */
  }
`
