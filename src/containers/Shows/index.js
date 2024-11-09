import React from 'react'

// import Header from '../../components'

import { Link } from 'react-router-dom'

import { HorizontalBorder, ShowTime } from './styles'

export function Shows() {
  return (
    <>
      <header />
      {'Header'}
      <main>
        <header></header>
        <body>
          <ul>
            <li>
              <span>Sessões</span>
            </li>
            <li>
              <span>Sobre o show</span>
            </li>
          </ul>
          <section>
            <div>dias da semana</div>
          </section>
          <section>
            <HorizontalBorder>
              <div>
                <button />
                <button />
                <button />
              </div>
              <div>
                <div>
                  <img />
                </div>
                <div>
                  <li>Nib Grande Circular</li>
                  <li>Av. Autaz Mirim, 7761 | Tancredo Neves</li>
                </div>
              </div>
            </HorizontalBorder>
            <ShowTime>
              <button type="button">Escolher horário</button>
              <Link>19:00</Link>
              <button type="button">Escolher horário</button>
              <Link>20:00</Link>
            </ShowTime>
          </section>
        </body>
      </main>
    </>
  )
}
