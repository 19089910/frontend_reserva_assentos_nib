import styled from 'styled-components'

export const SectionContainer = styled.section`
  max-width: 1440px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: calc(100% - 300px) 300px;
    display: grid;
  }
`
export const SpaceConteiner = styled.div`
  @media (min-width: 992px) {
    white-space: normal;
    overflow: visible;
    grid-row-end: none;
    grid-row-start: none;
  }
`
export const ContentContainer = styled.div`
  @media (min-width: 992px) {
    margin-right: 1.5rem;
    grid-row-start: none;
  }
`
export const Option = styled.ul`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;

  padding-top: 0;
  padding-bottom: 0;
  border-color: rgb(52 60 70);
  border-bottom-width: 2px;
  display: flex;
  margin-bottom: 0.75rem;
  z-index: 3;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`
export const SessionOption = styled.li`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  font-family: ${({ isBold }) =>
    isBold ? 'var(--uol-bold-text)' : 'var(--uol-text)'};
  color: ${({ isActive }) =>
    isActive ? 'rgb(240 240 240)' : 'rgb(173 182 194)'};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-color: ${({ isActive }) =>
    isActive ? 'rgb(50 85 226)' : 'rgb(52 60 70)'};
  border-style: solid;
  border-bottom-width: ${({ isActive }) => (isActive ? '4px' : '2px')};
  white-space: nowrap;
  cursor: pointer;
  flex-grow: 1;
  position: relative;
  text-decoration: none;
  top: 2px;

  &:hover {
    color: rgb(240, 240, 240);
    border-color: rgb(50 85 226);
    border-bottom-width: 4px;
  }

  @media (min-width: 992px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding-bottom: 0.75rem;
    flex-grow: 0;
  }
`
