import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HiddenInput = styled.input`
  display: none;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--provider-bg, #fff);
  color: var(--provider-color, #000);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--provider-bg-hover, rgba(255, 255, 255, 0.8));
  }
`

export const ProviderLogo = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
`

export const ButtonText = styled.span`
  font-size: 14px;
  color: var(--provider-color, #000);
`
