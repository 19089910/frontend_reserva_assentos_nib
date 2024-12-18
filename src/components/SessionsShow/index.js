import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import {
  groupByDate,
  formatDate,
  formatWeekDay,
  formatTime
} from '../../util/formatDateGrup'
import {
  ListWrapper,
  List,
  RelativeList,
  ButtonList,
  Arrow,
  TrackList,
  CarouselList,
  Splide,
  Flex,
  SessionsWrapper,
  Sessions,
  TruckSessions,
  LocationSessions,
  Title,
  Description,
  SessionsContainer,
  LinkSessions,
  FlexSessions,
  Relative,
  RelativeSpan
} from './styles'

export function SessionsShow() {
  const [activeOption, setActiveOption] = useState(null) // Guarda a data selecionada
  const [startIndex, setStartIndex] = useState(0) // Índice do primeiro item visível
  const [dates, setDates] = useState([]) // Datas da sessão
  const [time, setTime] = useState() // Hora da sessão
  const [show, setshow] = useState(null) // Informações do show
  const visibleDatesCount = 4 // Quantidade máxima de datas visíveis

  useEffect(() => {
    async function loadShows() {
      const { data } = await api.get('/shows')
      setshow(data[0]) // se for criar outro seria data[1]
      const groupedShows = groupByDate(data[0].dates)
      setTime(groupedShows)
      setDates(Object.keys(groupedShows))
    }
    loadShows()
  }, [])

  // Função para selecionar a data
  const handleDateSelect = (date) => {
    setActiveOption(date)
  }

  // Função para avançar no carrossel
  const handleNext = () => {
    if (startIndex + visibleDatesCount < dates.length) {
      setStartIndex(startIndex + 1)
    }
  }

  // Função para retroceder no carrossel
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <section>
      <ListWrapper>
        <List>
          <RelativeList>
            <div>
              <ButtonList
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous slide"
                direction="left"
              >
                <Arrow
                  direction="left"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 38"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.365 4.348A2.333 2.333 0 1 1 4.6.986l18.75 18.048L4.598 37.017a2.333 2.333 0 1 1-3.23-3.368l15.247-14.621z"
                    clipRule="evenodd"
                  ></path>
                </Arrow>
              </ButtonList>
              <ButtonList
                onClick={handleNext}
                disabled={startIndex + visibleDatesCount >= dates.length}
                aria-label="Next slide"
                direction="right"
              >
                <Arrow
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 38"
                  direction="right"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.365 4.348A2.333 2.333 0 1 1 4.6.986l18.75 18.048L4.598 37.017a2.333 2.333 0 1 1-3.23-3.368l15.247-14.621z"
                    clipRule="evenodd"
                  ></path>
                </Arrow>
              </ButtonList>
            </div>
            <TrackList>
              <CarouselList>
                {dates
                  .slice(startIndex, startIndex + visibleDatesCount)
                  .map((date, index) => (
                    <Splide key={index} onClick={() => handleDateSelect(date)}>
                      <Flex isActive={activeOption === date}>
                        <span>{formatWeekDay(date)}</span>
                        <span>{formatDate(date)}</span>
                      </Flex>
                    </Splide>
                  ))}
              </CarouselList>
            </TrackList>
          </RelativeList>
        </List>
      </ListWrapper>

      <SessionsWrapper>
        <Sessions>
          <TruckSessions>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <div className="button_favorito"></div>
              <LocationSessions>
                <Title>Nib Grande Circular</Title>
                <Description>
                  Av. Autaz Mirim, 7761 | Tancredo Neves
                </Description>
              </LocationSessions>
            </div>
            <div className="buttons" style={{ display: 'flex' }}></div>
          </TruckSessions>
          <FlexSessions>
            {activeOption && (
              <SessionsContainer>
                {Array.isArray(time[activeOption]) &&
                  time[activeOption].map((time, idx) => (
                    <LinkSessions
                      key={idx}
                      to={`/reserva?time=${new Date(time).toISOString()}`}
                    >
                      <Relative>
                        <RelativeSpan>{formatTime(time)}</RelativeSpan>
                      </Relative>
                    </LinkSessions>
                  ))}
              </SessionsContainer>
            )}
          </FlexSessions>
        </Sessions>
      </SessionsWrapper>
    </section>
  )
}
