import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;

  height: 23px;
  margin: 0.5px 0px;
  svg {
    width: 100%;
    height: 100%;
  }

  .i-background {
    fill: rgb(152, 170, 236); /* Cor de fundo do assento */
  }

  .i-border {
    fill: rgb(152, 170, 236); /* Cor da borda do assento */
  }
`
