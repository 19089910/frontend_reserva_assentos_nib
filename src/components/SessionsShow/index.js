import React from 'react'
import { Link } from 'react-router-dom'

import { show } from '../../constants'

export function SessionsShow() {
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

  const groupedShows = groupByDate(show)
  console.log(show)

  return (
    <section>
      <div>
        <div className="splide__list">
          {Object.keys(groupedShows).map((date, index) => (
            <div
              key={index}
              className={`splide__slide ${index === 0 ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${Object.keys(groupedShows).length}`}
            >
              <div className="flex cursor-pointer flex-col items-center border-none bg-ing-neutral-500 px-0 py-1 font-uol-bold text-base text-white">
                <span className="font-uol-bold uppercase text-lg">
                  {formatWeekDay(date)}
                </span>
                <span>{formatDate(date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                    minute: '2-digit'
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
