import React from 'react'

import {
  SectionContainer,
  Container,
  Banner,
  Overlay,
  Main,
  Poster,
  PosterDiv,
  PosterImg,
  Details,
  TitleDiv,
  Title,
  Session,
  Info,
  Rating,
  Age,
  Duration,
  ShowGenre,
  DescriptionContainer,
  DescriptionText,
  ReadMoreButton,
  ShareButton,
  IconContainer,
  StyledSvg
} from './styles'

export function BannerShows() {
  return (
    <SectionContainer>
      <Container>
        {/* Imagem de Fundo com Gradiente */}
        <div style={{ position: ' relative', width: '100%', height: '100%' }}>
          <Banner
            src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-destaque.jpg"
            alt="Banner do filme Interestelar"
            className="background-img"
          />

          <Main>
            {/* Poster do Filme */}
            <Poster>
              <PosterDiv>
                <PosterImg
                  src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg"
                  alt="Poster do filme Interestelar"
                />
              </PosterDiv>
            </Poster>

            {/* Detalhes do Filme */}
            <Details>
              <TitleDiv>
                <Title className="title">Interestelar</Title>
              </TitleDiv>

              <Session>
                <Info className="info">
                  <Rating>
                    <button className="rating" aria-label="Abrir classificação">
                      <Age>10</Age>
                    </button>
                  </Rating>
                  <Duration>2h49</Duration>
                  <ShowGenre>Ficção</ShowGenre>
                </Info>
                {/* Descrição com Botão de Expansão */}{' '}
                <DescriptionContainer>
                  <DescriptionText>
                    O aclamado cineasta Christopher Nolan (dos filmes “O
                    Cavaleiro das Trevas”, “A Origem”) dirige um elenco
                  </DescriptionText>
                  <ReadMoreButton href="#details">
                    Continuar lendo
                  </ReadMoreButton>
                </DescriptionContainer>
                {/* Botão de Compartilhar */}
                <ShareButton className="share-btn">
                  {' '}
                  <IconContainer>
                    <StyledSvg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      role="img"
                      aria-label="Share icon"
                    >
                      <path
                        style={{ fill: '#98aaec' }}
                        d="M44.833 9.333c4.879 0 8.834 3.955 8.834 8.834 0 4.878-3.955 8.833-8.834 8.833-3.162 0-5.937-1.662-7.497-4.16l-13.388 6.405c.25.819.385 1.688.385 2.588 0 .933-.144 1.832-.412 2.677l13.572 6.408C39.078 38.555 41.774 37 44.833 37c4.879 0 8.834 3.955 8.834 8.833 0 4.879-3.955 8.834-8.834 8.834-4.878 0-8.833-3.955-8.833-8.834 0-.393.026-.78.075-1.16l-14.213-6.712C20.255 39.63 18 40.667 15.5 40.667c-4.879 0-8.833-3.955-8.833-8.834C6.667 26.955 10.62 23 15.5 23c2.534 0 4.82 1.067 6.43 2.777l14.111-6.752c-.027-.282-.041-.569-.041-.858 0-4.879 3.955-8.834 8.833-8.834zm0 31.26c-2.894 0-5.24 2.346-5.24 5.24s2.346 5.24 5.24 5.24 5.24-2.346 5.24-5.24-2.346-5.24-5.24-5.24zm-29.333-14c-2.894 0-5.24 2.346-5.24 5.24s2.346 5.24 5.24 5.24 5.24-2.346 5.24-5.24-2.346-5.24-5.24-5.24zm29.333-13.666c-2.894 0-5.24 2.346-5.24 5.24s2.346 5.24 5.24 5.24 5.24-2.346 5.24-5.24-2.346-5.24-5.24-5.24z"
                      ></path>
                    </StyledSvg>
                  </IconContainer>
                  Compartilhar
                </ShareButton>
              </Session>
            </Details>
          </Main>
          <Overlay />
        </div>
      </Container>
    </SectionContainer>
  )
}
