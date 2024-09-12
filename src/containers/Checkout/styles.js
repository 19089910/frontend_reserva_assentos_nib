import styled from 'styled-components'

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
  background: #343c46;
  color: #fff;
  padding: 16px;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
`

export const MatrizContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #21262d;
  padding: 20px;
  //width: 100%;
`

export const StageContainer = styled.div`
  text-align: center;
  background-color: #ccc;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 20px;
  width: 100%;
`
export const ReactTransformComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(min(28px, 50vh));
  transform: translate(0px, 0px) scale(1);
`
export const Circle = styled.div`
  height: calc(min(28px, 50vh));
`

export const RowLabel = styled.span`
  flex: 1 1 0%;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 0.75em;
`
