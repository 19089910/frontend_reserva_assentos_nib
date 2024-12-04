import styled from 'styled-components'

export const Container = styled.section`
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
export const Titles = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-bottom: 0.75rem;

  margin: 0;
`
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin: 0;
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
export const Grid = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 600px) {
    gap: 1rem;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 0.75rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`
export const GridLine = styled.li``
