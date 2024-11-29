import styled from 'styled-components'
export const Container = styled.div`
  @media (min-width: 992px) {
    padding: 32px 16px 16px;
    background: none;
  }
  background: none;
  padding-top: 16px;
  vertical-align: baseline;
`
export const Legenda = styled.h2`
  @media (min-width: 992px) {
    padding-top: 8px;
    border-top: 1px solid rgb(113, 113, 122);
  }
  color: rgb(136, 153, 170);
  font-size: 16px;
  margin-bottom: 16px;
`
export const Ul = styled.ul`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 8px;
  gap: 16px;
  list-style: none;
`
export const Li = styled.li`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
`
export const Span = styled.span`
  min-width: 12px;
  fill: red;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0px;
  height: 16px;
  width: 16px;
`
export const Label = styled.span`
  color: rgb(136, 153, 170);
  font-size: 12px;
  margin-top: 4px;
  min-width: 12px;
  fill: red;
`
export const Svg = styled.svg`
  height: 100%;
  width: 100%;
  padding: 0px;
  fill: rgb(152, 170, 236);
`
export const SvgSelect = styled.svg`
  height: 100%;
  width: 100%;
  padding: 0px;
  fill: rgb(255, 214, 51);
`
export const SvgOccupied = styled.svg`
  height: 100%;
  width: 100%;
  padding: 0px;
  fill: rgb(240, 240, 240) !important;
`
