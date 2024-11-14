import React, { useState } from 'react'

import { BannerShows } from '../../components/BannerShow'
import { DetailsShow } from '../../components/DetailsShow'
import { SessionsShow } from '../../components/SessionsShow'
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

          {/* Renderizar a seção "Sessões" apenas se activeOption for 'sessions' */}
          {activeOption === 'sessions' && <SessionsShow />}

          {/* Renderizar a seção "Sobre o Show" apenas se activeOption for 'details' */}
          {activeOption === 'details' && <DetailsShow />}
        </ContentContainer>
        <SpaceConteiner />
      </SectionContainer>
    </>
  )
}
