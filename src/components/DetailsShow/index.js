import React from 'react'

import {
  Container,
  SectionSinopse,
  Sinopse,
  Description,
  ButtonSessions,
  SectionSheet
} from './styles'

export function DetailsShow() {
  return (
    <Container>
      <SectionSinopse>
        <Sinopse>As Aventuras dos Brinquedos no Mundo Toy Store 🎭✨</Sinopse>
        <Description data-testid="movie-synopsis">
          Prepare-se para um espetáculo que vai encantar toda a família! De 20 a
          24 de outubro, venha viver uma aventura mágica com brinquedos que
          ganham vida, transportando você para o infinito e além! Com uma
          superestrutura de iluminação e som de cinema, esta experiência única
          acontecerá no Auditório da Nova Igreja Batista - Grande Circular.
        </Description>
        <ButtonSessions>Ver sessões</ButtonSessions>
      </SectionSinopse>
      {/* trilers */}
      <section></section>
      <SectionSheet>
        <Sinopse>Ficha técnica:</Sinopse>
        <ul>
          <li>
            <strong>📅 Datas e Horários:</strong>
            <br />
            20, 21 e 23 de outubro: Sessões às 19h30
            <br />
            22 e 24 de outubro: Sessões em dois horários: 17h e 19h
          </li>
          <li>
            <strong>🎟 Entrada gratuita</strong>
            <br />
            Não perca esta oportunidade de viver momentos emocionantes e cheios
            de valores para toda a família.
          </li>
          <li>
            <strong>Duração:</strong>
            <br />
            135 min
          </li>
          <li>
            <strong>Gênero:</strong>
            <br />
            <span className="capitalize">Infantil</span>,
            <span className="capitalize">Aventura</span>,
            <span className="capitalize">Fantasia</span>,
            <span className="capitalize">Comédia</span>
          </li>
          <li>
            <strong>Direção:</strong>
            <br />
            Nova Igreja Batista Grande Circular
          </li>
        </ul>
      </SectionSheet>
    </Container>
  )
}
