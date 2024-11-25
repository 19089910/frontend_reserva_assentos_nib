import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { show } from '../../constants'
import {
  ListWrapper,
  List,
  RelativeList,
  ButtonList,
  Arrow,
  TrackList,
  CarouselList,
  Splide,
  Flex
} from './styles'

export function SessionsShow() {
  const [activeOption, setActiveOption] = useState(null) // Guarda a data selecionada
  const [startIndex, setStartIndex] = useState(0) // Índice do primeiro item visível
  const visibleDatesCount = 5 // Quantidade máxima de datas visíveis

  // Função para selecionar a data
  const handleDateSelect = (date) => {
    setActiveOption(date)
  }

  const formatWeekDay = (dateString) => {
    const date = new Date(dateString) // Cria o objeto Date
    const weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'] // Array com os dias da semana em português
    const weekDayIndex = date.getUTCDay() // Retorna o índice do dia da semana em UTC (0 = domingo, 1 = segunda, ...)
    return weekdays[weekDayIndex].toUpperCase() // Retorna o nome do dia da semana em maiúsculas
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString) // Cria o objeto Date
    const day = date.getUTCDate() // Usa getUTCDate para evitar deslocamento de horário
    const month = date.getUTCMonth() + 1 // getUTCMonth retorna de 0 a 11
    return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`
  }

  const groupByDate = (shows) => {
    const grouped = {}
    shows.forEach(({ showDateTime }) => {
      const date = showDateTime.split('T')[0] // Isolando a data (YYYY-MM-DD)
      if (!grouped[date]) grouped[date] = []
      grouped[date].push(showDateTime)
    })
    return grouped
  }

  const groupedShows = groupByDate(show[0].dates) // se for criar outro shows[1]
  const dates = Object.keys(groupedShows)

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
            <div className="splide__arrows">
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
                        <span
                          style={{
                            textTransform: 'uppercase',
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem'
                          }}
                        >
                          {formatWeekDay(date)}
                        </span>
                        <span>{formatDate(date)}</span>
                      </Flex>
                    </Splide>
                  ))}
              </CarouselList>
            </TrackList>
          </RelativeList>
        </List>
      </ListWrapper>

      <div>
        <div>
          <div>
            <img src="sua-imagem.jpg" alt="Imagem do local" />
          </div>
          <div>
            <li>Nib Grande Circular</li>
            <li>Av. Autaz Mirim, 7761 | Tancredo Neves</li>
          </div>
        </div>
        {activeOption && (
          <div>
            {groupedShows[activeOption].map((time, idx) => (
              <div key={idx}>
                <button type="button">Escolher horário</button>
                <Link to={`/reserva?time=${new Date(time).toISOString()}`}>
                  {new Date(time).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'America/Manaus' // Define o fuso horário correto
                  })}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
