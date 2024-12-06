import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const LabelDate = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const DivDate = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Box = styled.div`
  flex: 1 0 200px;
  max-width: 200px;
  background-color: #fff;
  border-radius: 8px;
  padding: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ButtonX = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: #e63946;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`
