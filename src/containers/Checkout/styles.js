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
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 0.75em;
`
export const RowLabelOld = styled.span`
  display: inline-block;
  width: 50px; /* Largura fixa para o rótulo */
  text-align: center; /* Centraliza o texto */
  color: #fff;

  font-size: 0.875rem; /* Tamanho da fonte */
`
export const Stage = styled.div`
  color: rgb(33, 38, 50);
  background: rgb(173, 182, 194);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.9px;
  text-align: center;
  text-transform: uppercase;
  height: 18px;
  border-bottom: 2px solid rgb(240, 240, 240);
  margin: 16px 0px 16px;
`
export const Text = styled.text`
  font-size: 7em;
  text-anchor: middle;
  text-transform: uppercase;
  dominant-baseline: middle;
  fill: rgb(0, 0, 0);
`
