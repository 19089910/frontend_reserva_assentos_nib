import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { show } from '../../constants'
import { ListWrapper, List, TrackList, Splide, Flex } from './styles'

export function SessionsShow() {
  const [activeOption, setActiveOption] = useState()

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

  return (
    <section>
      <ListWrapper>
        <List>
          <div className="buttons"></div>
          <TrackList>
            {Object.keys(groupedShows).map((date, index) => (
              <Splide
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${
                  Object.keys(groupedShows).length
                }`}
              >
                <Flex>
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
          </TrackList>
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
        {Object.keys(groupedShows).map((date, index) => (
          <div key={index}>
            {groupedShows[date].map((time, idx) => (
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
        ))}
      </div>
    </section>
  )
}
