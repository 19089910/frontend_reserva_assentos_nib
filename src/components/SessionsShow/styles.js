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
  width: calc(16.6667% - 0.833333rem);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: 992px) {
    width: calc(25% - 0.75rem);
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
