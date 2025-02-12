/** FALTA:
 * styles do menu de { Botão de Compartilhar }
 * { Adicione mais opções de compartilhamento, como Twitter, WhatsApp, etc. }
 * constats: de links href="https://www.facebook.com/sharer/sharer.php?u=https://aventuradosbrinquedos.vercel.app" etc..
 */

import PropTypes from 'prop-types'
import React, { useState } from 'react'

import BannerImg from '../../assets/banner.png'
import PosterImgS from '../../assets/poster.png'
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

export function BannerShows({ onNavigate }) {
  const [isShareOpen, setIsShareOpen] = useState(false)

  const toggleSharePopup = () => {
    setIsShareOpen(!isShareOpen)
  }
  return (
    <SectionContainer>
      <Container>
        {/* Imagem de Fundo com Gradiente */}
        <div style={{ position: ' relative', width: '100%', height: '100%' }}>
          <Banner
            src={BannerImg}
            alt="Banner do filme"
            className="background-img"
          />

          <Main>
            {/* Poster do Filme */}
            <Poster>
              <PosterDiv>
                <PosterImg src={PosterImgS} alt="Poster do filme" />
              </PosterDiv>
            </Poster>

            {/* Detalhes do Filme */}
            <Details>
              <TitleDiv>
                <Title className="title">As aventuras dos brinquedos</Title>
              </TitleDiv>

              <Session>
                <Info className="info">
                  <Rating>
                    <button className="rating" aria-label="Abrir classificação">
                      <Age>L</Age>
                    </button>
                  </Rating>
                  <Duration>1h20</Duration>
                  <ShowGenre>Infantil</ShowGenre>
                </Info>
                {/* Descrição com Botão de Expansão */}{' '}
                <DescriptionContainer>
                  <DescriptionText>
                    Prepare-se para um espetáculo que vai encantar toda a
                    família! De 20 a 24 de outubro, venha viver uma aventura
                    mágica com brinquedos que ganham vida, transportando você
                    para o infinito e além!
                  </DescriptionText>
                  <ReadMoreButton
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate('details')
                    }}
                  >
                    Continuar lendo
                  </ReadMoreButton>
                </DescriptionContainer>
                {/* Botão de Compartilhar */}
                <ShareButton onClick={toggleSharePopup}>
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
                {isShareOpen && (
                  <div
                    className="share-popup"
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="popup-content">
                      <ul className="flex flex-col">
                        <li className="cursor-pointer">Copiar link</li>
                        <li>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https://aventuradosbrinquedos.vercel.app"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Compartilhar no Facebook
                          </a>
                        </li>
                        {/* Adicione mais opções de compartilhamento, como Twitter, WhatsApp, etc. */}
                      </ul>
                    </div>
                  </div>
                )}
              </Session>
            </Details>
          </Main>
          <Overlay />
        </div>
      </Container>
    </SectionContainer>
  )
}

BannerShows.propTypes = {
  onNavigate: PropTypes.func.isRequired
}
