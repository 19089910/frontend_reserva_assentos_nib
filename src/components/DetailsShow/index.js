import React from 'react'

import {
  Container,
  SectionSinopse,
  Titles,
  Description,
  ButtonSessions,
  SectionSheet,
  Grid,
  GridLine
} from './styles'

export function DetailsShow() {
  return (
    <Container>
      <SectionSinopse>
        <Titles>As Aventuras dos Brinquedos no Mundo Toy Store 🎭✨</Titles>
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
        <Titles>Ficha técnica:</Titles>
        <Grid>
          <GridLine>
            <strong>📅 Datas e Horários:</strong>
            <br />
            20, 21 e 23 de outubro: Sessões às 19h30
            <br />
            22 e 24 de outubro: Sessões em dois horários: 17h e 19h
          </GridLine>
          <li>
            <strong>🎟 Entrada gratuita</strong>
            <br />
            Não perca esta oportunidade de viver momentos emocionantes e cheios
            de valores para toda a família.
          </li>
          <li>
            <strong>Duração:</strong>
            <br />
            80 min
          </li>
          <li>
            <strong>Gênero:</strong>
            <br />
            <span className="capitalize">Infantil</span>
          </li>
          <li>
            <strong>Direção:</strong>
            <br />
            Nova Igreja Batista Grande Circular
          </li>
        </Grid>
      </SectionSheet>
    </Container>
  )
}
