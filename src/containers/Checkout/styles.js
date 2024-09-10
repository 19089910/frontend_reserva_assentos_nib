import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin: 0px auto 16px;
  box-sizing: content-box;
  padding: 0px 10px;
  -webkit-box-pack: center;
  background: #161b22;
`
export const Header = styled.div`
  background: rgb(52, 60, 70);

  color: rgb(255, 255, 255);
`

export const MatrizContainer = styled.div`
  cursor: pointer;
  font-weight: 600;
  animation-duration: 100ms;
  transform: scale(0.85);
  position: relative;
  background: rgb(33, 38, 45);
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;

  width: 100%;
  padding: 32px 56px 8px;
  max-width: 1440px;
`
export const StageContainer = styled.div`
  text-align: center;
  background-color: #ccc; /* Cor de fundo para representar a tela */
  padding: 10px;
  font-weight: bold;
  margin-bottom: 20px; /* Espaço abaixo do palco */
`
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`

// Container para cada assento
export const SeatContainer = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`

// Label para identificar a linha de assentos (ex: A, B, C)
export const RowLabel = styled.span`
  width: 24px;
  text-align: center;
  font-weight: bold;
  margin-right: 8px;
`
