import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const SectionContainer = styled.section``

export const ListWrapper = styled.div`
  @media (min-width: 992px) {
    padding-top: 2rem;
    position: static;
  }
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
export const List = styled.div`
  @media (min-width: 992px) {
    padding-left: 0;
    padding-right: 0;
    border-radius: 0.25rem;
  }
  background-color: rgb(52 60 70);
  padding-left: 10px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const RelativeList = styled.div`
  visibility: visible;
  position: relative;
`
export const TrackList = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  position: relative;
  z-index: 0;
`
export const CarouselList = styled.div`
  transform: translateX(0px);
  backface-visibility: hidden;
  display: flex;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
`
export const Splide = styled.div`
  backface-visibility: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  list-style-type: none !important;
  margin: 0;
  position: relative;
  margin-right: 1rem;
  width: calc(25% - 0.75rem);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: 992px) {
    width: calc(19.6667% - 0.833333rem);
  }
`
export const Flex = styled.div`
  color: ${(props) =>
    props.isActive ? ' rgb(255 255 255)' : 'rgb(173 182 194)'};
  font-size: ${(props) => (props.isActive ? '1rem' : '0.875rem')};
  line-height: ${(props) => (props.isActive ? ' 1.5rem' : '1.25rem')};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  background-color: rgb(52 60 70);
  border-style: none;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  display: flex;

  .span {
    text-transform: uppercase;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`
export const ButtonList = styled.button`
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  //pointer-events: none;
  //opacity: 0;
  background-color: transparent;
  border-style: none;
  border-radius: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 10;
  top: calc(50% - 12px);
  position: absolute;
  cursor: default;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
`
export const Arrow = styled.svg`
  transform: ${({ direction }) =>
    direction === 'left' ? 'scaleX(-1);' : 'scaleX(1);'};
  fill: #98aaec;
  width: 1.5rem;
  height: 1.5rem;
`
export const SessionsWrapper = styled.div`
  @media (min-width: 992px) {
    margin-bottom: 2rem;
    margin-left: 0;
    margin-right: 0;
  }
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`
export const Sessions = styled.div`
  @media (min-width: 992px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 9px;
  padding-right: 9px;
  background-color: rgb(33 38 45);
  border-radius: 1rem;
  flex-direction: column;
  display: flex;
  margin-top: 1.5rem;
`
export const TruckSessions = styled.div`
  @media (min-width: 992px) {
    flex-direction: row;
    margin-bottom: 0.5rem;
  }

  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  padding-bottom: 0.5rem;
  border-bottom-color: rgb(52 60 70);
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 1.25rem;
`
export const LocationSessions = styled.div`
  @media (min-width: 992px) {
    margin-left: 1rem;
  }
  flex-direction: column;
  display: flex;
  margin-left: 0.75rem;
`
export const Title = styled.a`
  text-decoration-line: none;
  text-align: left;
  color: inherit;
  text-decoration: inherit;
`
export const Description = styled.a`
  @media (min-width: 992px) {
    display: block;
  }
  color: rgb(153 153 153);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: none;
`
export const SessionsContainer = styled.div`
  @media (min-width: 992px) {
    margin-top: 1rem;
  }
  gap: 0.5rem;
  flex-wrap: wrap;
  display: flex;
  margin-top: 0.5rem;
`
export const LinkSessions = styled(Link)`
  //@media (min-width: 992px) {
  //  font-size: 1.25rem;
  //  line-height: 1.75rem;
  //  padding-left: 0.75rem;
  //  padding-right: 0.75rem;
  //  height: 3rem;
  //}
  color: rgb(152 170 236);
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  background-color: transparent;
  border-style: solid;
  border-color: rgb(152 170 236);
  border-width: 2px;
  border-radius: 10px;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  display: inline-flex;
  text-decoration: inherit;
  &:hover {
    color: white;
    background-color: rgb(152, 170, 236);
    border-color: rgb(152, 170, 236);
    transform: scale(1.05);
  }
`
export const FlexSessions = styled.div`
  margin-bottom: 0.75rem;
  @media (min-width: 992px) {
    margin-bottom: 2rem;
  }
  flex-direction: column;
  display: flex;
  margin-bottom: 1.5rem;
`
export const Relative = styled.div`
  @media (min-width: 992px) {
    overflow: hidden;
    width: auto;
  }
  text-align: center;
  justify-content: center;
  align-items: center;
  width: auto;
  display: flex;
  box-sizing: border-box;
  position: relative;
`

export const RelativeSpan = styled.span`
  //@media (min-width: 992px) {
  //  transition-duration: 0.25s;
  //  display: inline-block;
  //  right: 0;
  //  left: 0;
  //  position: absolute;
  //  font-size: 1.25rem;
  //  line-height: 1.75rem;
  //}

  color: rgb(152 170 236);
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: var(--uol-text);
  border-color: rgb(152 170 236);
  white-space: nowrap;
  color: inherit;
  text-decoration: inherit;
`
