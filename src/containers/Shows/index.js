import React from 'react'
import { Link } from 'react-router-dom'

import { BannerShows } from '../../components/BannerShow'

export function Shows() {
  return (
    <>
      <BannerShows />
      <div>
        <ul>
          <li>
            <span>Sessões</span>
          </li>
          <li>
            <span>Sobre o show</span>
          </li>
        </ul>

        <section>
          <div>Dias da semana</div>
        </section>

        <section>
          <div>
            <div>
              <button aria-label="Botão 1" />
              <button aria-label="Botão 2" />
              <button aria-label="Botão 3" />
            </div>
            <div>
              <div>
                <img src="sua-imagem.jpg" alt="Imagem do local" />
              </div>
              <div>
                <li>Nib Grande Circular</li>
                <li>Av. Autaz Mirim, 7761 | Tancredo Neves</li>
              </div>
            </div>
          </div>

          <div>
            <button type="button">Escolher horário</button>
            <Link to="/reserva?time=19:00">19:00</Link>
            <button type="button">Escolher horário</button>
            <Link to="/reserva?time=20:00">20:00</Link>
          </div>
        </section>
      </div>
    </>
  )
}
