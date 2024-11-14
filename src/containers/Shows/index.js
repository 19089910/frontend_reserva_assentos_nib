import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BannerShows } from '../../components/BannerShow'
import {
  SectionContainer,
  SpaceConteiner,
  ContentContainer,
  Option,
  SessionOption
} from './styles'

export function Shows() {
  const [activeOption, setActiveOption] = useState('sessions')
  return (
    <>
      <BannerShows />
      <SectionContainer>
        <ContentContainer>
          <Option>
            <SessionOption
              href="#sessions"
              isActive={activeOption === 'sessions'}
              onClick={() => setActiveOption('sessions')}
            >
              <span style={{ scrollMargin: '5rem' }}>Sessões</span>
            </SessionOption>

            <SessionOption
              href="#details"
              isActive={activeOption === 'details'}
              onClick={() => setActiveOption('details')}
            >
              <span>Sobre o show</span>
            </SessionOption>
          </Option>

          <section>
            <div>
              <div>Dias da semana</div>
            </div>
          </section>

          <section>
            <div>
              <div>Dias da semana</div>
            </div>
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
        </ContentContainer>
        <SpaceConteiner />
      </SectionContainer>
    </>
  )
}
