import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
`

export const Signin = styled.div`
  text-align: center;
`

export const Card = styled.div`
  background-color: var(--color-background-card);
  border-radius: 2rem;
  padding: 1.25rem 2rem;

  @media screen and (min-width: 450px) {
    margin: 2rem 0;
    width: 368px;
  }

  @media screen and (max-width: 450px) {
    margin: 1rem 0;
    width: 343px;
  }
`

export const ProviderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border-radius: var(--border-radius);
  border: none;
  min-height: 62px;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  span {
    flex-grow: 1;
  }
`

export const ProviderLogo = styled.img`
  display: block;
  width: 25px;
`

export const ProviderLogoDark = styled.img`
  display: none;

  @media (prefers-color-scheme: dark) {
    display: block;
  }
`
