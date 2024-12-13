import React from 'react'

import {} from './styles.js'
import PosterImgS from '../../assets/poster.png'
export function Reservation() {
  const reservation = {
    movie: {
      title: 'Sonic 3: O Filme',
      format: '2D',
      language: 'Dublado',
      theater: 'Cinemark Aricanduva',
      location: 'São Paulo',
      date: 'qua 25/12',
      time: '16:20',
      poster: PosterImgS
    },
    seats: ['C 13', 'C 12'],
    totalItems: 2
  }

  return (
    <div className="reservation-summary">
      <div className="header">
        <h1>Resumo do pedido</h1>
        <span className="icon-trash" title="Excluir pedido">
          🗑️
        </span>
      </div>
      <div className="movie-info">
        <img src={reservation.movie.poster} alt={reservation.movie.title} />
        <div className="details">
          <h2>{reservation.movie.title}</h2>
          <p>
            {reservation.movie.format} - {reservation.movie.language}
          </p>
          <p>{reservation.movie.theater}</p>
          <p>{reservation.movie.location}</p>
          <p>
            {reservation.movie.date} às {reservation.movie.time}
          </p>
        </div>
      </div>
      <div className="seats-info">
        <h2>Assentos</h2>
        <strong>{reservation.seats.join(', ')}</strong>
      </div>
      <div className="price-summary">
        <div className="item">
          <span>Itens</span>
          <span>{reservation.totalItems}</span>
        </div>
        <div className="item">
          <span>Total taxa</span>
          <span>{reservation.totalTax}</span>
        </div>
        <div className="total">
          <strong>Total</strong>
          <strong>{reservation.totalPrice}</strong>
        </div>
      </div>
    </div>
  )
}
