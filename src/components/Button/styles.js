import styled from 'styled-components'

export const ContainerButton = styled.button`
  @media (min-width: 600px) {
    display: inline-flex;
  }

  color: rgb(255 255 255);
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 0.75rem;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 3rem;
  display: none;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  text-transform: none;

  background-image: linear-gradient(to right, #3255e2, #6c04ba);
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
