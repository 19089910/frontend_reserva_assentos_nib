import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 992px) {
    padding: 0;
  }
  color: rgb(255 255 255);
  padding-top: 0;
  padding-bottom: 0;

  padding-left: 1.25rem;
  padding-right: 1.25rem;
`
export const SectionSinopse = styled.section`
  @media (min-width: 600px) {
    padding-bottom: 1rem;
  }
  box-sizing: border-box;
  border: 0 solid #e5e7eb;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-color: rgb(52 60 70);
  border-style: solid;
  border-bottom-width: 1px;
`
export const Sinopse = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;

  font-family: var(--uol-bold-text);
  font-weight: inherit;

  margin: 0;

  font-size: inherit;
  font-weight: inherit;
`
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin: 0;
`
export const ButtonSessions = styled.button`
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
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;

  background-image: linear-gradient(to right, #3255e2, #6c04ba);
`
export const SectionSheet = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  border-color: rgb(52 60 70);
  border-style: solid;
  border-bottom-width: 1px;
  width: 100%;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
`
