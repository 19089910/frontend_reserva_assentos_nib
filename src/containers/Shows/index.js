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

  const handleNavigation = (option) => {
    setActiveOption(option)
  }
  return (
    <>
      <BannerShows onNavigate={handleNavigation} />
      <SectionContainer>
        <ContentContainer>
          <Option>
            <SessionOption
              isActive={activeOption === 'sessions'}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('sessions')
              }}
            >
              <span style={{ scrollMargin: '5rem' }}>Sessões</span>
            </SessionOption>

            <SessionOption
              isActive={activeOption === 'details'}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('details')
              }}
            >
              <span>Sobre o show</span>
            </SessionOption>
          </Option>

          {/* Renderizar a seção "Sessões" apenas se activeOption for 'sessions' */}
          {activeOption === 'sessions' && <SessionsShow />}

          {/* Renderizar a seção "Sobre o Show" apenas se activeOption for 'details' */}
          {activeOption === 'details' && (
            <DetailsShow onNavigate={handleNavigation} />
          )}
        </ContentContainer>
        <SpaceConteiner />
      </SectionContainer>
    </>
  )
}
