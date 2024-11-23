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
  visibility: visible;
  position: relative;
`
export const TrackList = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  overflow: hidden;
  position: relative;
  z-index: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  transform: translateX(0px);
  backface-visibility: hidden;
  display: flex;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
`
export const Splide = styled.div`
  margin-right: 1rem;
  width: calc(16.6667% - 0.833333rem);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  backface-visibility: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  list-style-type: none !important;
  margin: 0;
  position: relative;
`
export const Flex = styled.div`
  color: rgb(255 255 255);
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0;
  padding-right: 0;
  background-color: rgb(52 60 70);
  border-style: none;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  display: flex;
`
