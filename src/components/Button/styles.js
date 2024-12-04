import styled from 'styled-components'

export const ContainerButton = styled.button`
  // layout
  width: 180px;
  height: 50px;
  //margin-top: 75px;
  //margin-bottom: 25px;
  // style
  background: #9758a6;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border-radius: 100px;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  // internally
  color: #eee;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
