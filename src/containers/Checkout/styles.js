import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
  margin: 0 auto;
  padding: 10px;
  background: #161b22;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  background: rgb(52, 60, 70); /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 16px; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
  font-size: 1.5rem; /* Tamanho da fonte */
  width: 100%; /* Ocupa toda a largura */
  position: relative;
`

export const MatrizContainer = styled.div`
  display: flex; /* Ativa o flexbox */
  //flex-wrap: wrap; /* Permite que os itens quebrem linha */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  background: rgb(33, 38, 45); /* Cor de fundo */
  padding: 12px 8px; /* Espaçamento interno */
  width: 100%; /* Ocupa toda a largura */

  flex-direction: column; /* Alinha os itens na vertical */
  flex: 1; /* Faz com que o container cresça para preencher o espaço disponível */
  box-sizing: border-box; /* Inclui o padding e a borda no cálculo da largura e altura */
`

export const ReactTransformComponent = styled.div`
  display: flex; /* Ativa o flexbox */
  flex-wrap: wrap; /* Permite que os itens quebrem linha */
  justify-content: center; /* Centraliza os itens horizontalmente */
  width: 100%; /* Ocupa toda a largura disponível */

  // height: 100%; /* Ocupa toda a altura disponível */
`
export const Circle = styled.div`
  width: 30px; /* Tamanho fixo para o círculo */
  height: 30px; /* Tamanho fixo para o círculo */
  margin: 0.7px 0px; /* Espaçamento entre os círculos */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RowLabel = styled.span`
  display: inline-block;
  width: 50px; /* Largura fixa para o rótulo */
  text-align: center; /* Centraliza o texto */
  color: #fff;

  font-size: 0.875rem; /* Tamanho da fonte */
`
