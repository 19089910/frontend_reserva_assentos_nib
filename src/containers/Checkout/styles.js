import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 12px 8px;
  }

  width: 100%;
  padding: 32px 56px 8px;
  max-width: 1440px;
  .transform-component-module_wrapper__7HFJe {
    position: relative;
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    padding: 0;
  }
  .transform-component-module_content__uCDPE {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(33, 38, 45);

    display: flex;
    flex-wrap: wrap;
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    transform-origin: 0% 0%;
  }
`
export const ReactTransformComponent = styled.div`
  @media (min-width: 992px) {
    height: 30px;
  }
  display: flex;
  height: 34px;
  margin: 0.5px 0px;
  padding: 0px;
  border: 0px;
  font-size: 100%;
  vertical-align: baseline;
  @media (max-width: 992px) {
    height: 29px;
  }
  @media (max-width: 980px) {
    height: 28px;
  }
  @media (max-width: 960px) {
    height: 27px;
  }
  @media (max-width: 940px) {
    height: 26px;
  }
  @media (max-width: 920px) {
    height: 25px;
  }
  @media (max-width: 900px) {
    height: 24px;
  }
  @media (max-width: 880px) {
    height: 23px;
  }
  @media (max-width: 860px) {
    height: 22px;
  }
  @media (max-width: 840px) {
    height: 21px;
  }
  @media (max-width: 820px) {
    height: 20px;
  }
  @media (max-width: 800px) {
    height: 19px;
  }
  @media (max-width: 780px) {
    height: 18px;
  }
  @media (max-width: 760px) {
    height: 17px;
  }
  @media (max-width: 740px) {
    height: 17px;
  }
  @media (max-width: 720px) {
    height: 16px;
  }
  @media (max-width: 700px) {
    height: 16px;
  }
  @media (max-width: 680px) {
    height: 15px;
  }
  @media (max-width: 660px) {
    height: 15px;
  }
  @media (max-width: 640px) {
    height: 14px;
  }
  @media (max-width: 620px) {
    height: 14px;
  }
  @media (max-width: 600px) {
    height: 13px;
  }
  @media (max-width: 580px) {
    height: 13px;
  }
  @media (max-width: 560px) {
    height: 12px;
  }
  @media (max-width: 540px) {
    height: 12px;
  }
  @media (max-width: 520px) {
    height: 11px;
  }
  @media (max-width: 500px) {
    height: 11px;
  }
  @media (max-width: 480px) {
    height: 10px;
  }
  @media (max-width: 460px) {
    height: 10px;
  }
`
const pulseAnimation = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.8, 1.8, 1.8);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  padding: 0;
  transform: scale(0.85);

  &.dnWEgS {
    animation: ${pulseAnimation} 100ms;
  }

  &.dnWEgS svg {
    transform: scale(1.1);
  }

  .eVTepf svg {
    height: 100%;
    width: 100%;
    fill: #fff !important;
  }

  .efecth {
    position: relative;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const Span = styled.span`
  &.parsonScale {
    transform: scale(0.5);
  }
  position: absolute;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0px;
  height: 100%;
  width: 100%;
`
export const RowLabel = styled.span`
  @media (max-width: 992px) {
    font-size: 0.5em;
  }
  flex: 1 1 0%;
  flex: 1 0 2%;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 0.75em;
`
export const Stage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  place-content: center;
  color: rgb(33, 38, 50);
  background: rgb(173, 182, 194);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.9px;
  text-align: center;
  text-transform: uppercase;
  height: 18px;
  height: 30px;
  border-bottom: 2px solid rgb(240, 240, 240);
  margin: 0px 0px 16px;
`
export const Text = styled.text`
  font-size: 7em;
  text-anchor: middle;
  text-transform: uppercase;
  dominant-baseline: middle;
  fill: rgb(0, 0, 0);
`
export const Detail = styled.div`
  /* Configuração para o lado esquerdo */
  left: 0;

  &.right {
    left: auto; /* Remove o alinhamento padrão */
    right: 0; /* Posiciona no lado direito */
    border-left: 1.7em solid transparent;
    border-right: unset;
  }
  border-right: 1.7em solid transparent;
  content: '';
  position: absolute;
  top: 0px;
  width: 0px;
  height: 0px;
  border-bottom: 18px solid rgb(33, 38, 45);
  border-bottom: 30px solid rgb(33, 38, 45);
`
export const FooderContainer = styled.div`
  @media (max-width: 1440px) {
    left: 0px;
  }

  position: fixed;
  bottom: 0px;
  max-width: 1440px;
  width: 100%;
  background-color: rgb(52, 60, 70);
  display: flex;
  flex-direction: column;
  letter-spacing: 0.4px;
  background-image: url((desconhecido));
`
export const FooderWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 10px;
  margin: 0px;
  border: 0px;
  font-size: 100%;
  vertical-align: baseline;
`
export const ButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`
export const Button = styled.button`
  background-image: linear-gradient(
    to right,
    rgb(255, 206, 0),
    rgb(255, 136, 0)
  );
  background-color: rgb(153, 153, 153);
  color: rgb(33, 38, 45);

  cursor: pointer;
  position: relative;
  border: none;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 40px;
  width: auto;
  min-width: 140px;
  text-transform: none;
  letter-spacing: 1px;
  gap: 14px;
  transition: all 0.3s ease; /* Suaviza a transição */

  /* Hover: muda a cor e adiciona um leve aumento no tamanho */
  &:hover {
    background-image: linear-gradient(
      to right,
      rgb(255, 230, 50),
      rgb(255, 160, 50)
    );
    transform: scale(1.05); /* Aumenta ligeiramente o botão */
  }

  /* Active: dá a impressão de um clique ao reduzir o botão */
  &:active {
    transform: scale(0.95); /* Reduz ligeiramente o botão */
    background-image: linear-gradient(
      to right,
      rgb(255, 190, 0),
      rgb(255, 120, 0)
    );
  }
`
