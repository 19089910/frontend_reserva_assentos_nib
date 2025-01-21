/** FALTA:
 * bug de responsividade o menu bar do usuario some em celular
 * fazer o react trabalhar melhor com o header dos menu bar de usuario e do map
 */

import React, { useEffect, useState } from 'react'

import LogoMin from '../../assets/Marca_GC_100.png'
import LogoLarg from '../../assets/maxresdefault.png'
import { auth } from '../../config/firebase'
import { useUser } from '../../hooks/authProvider'
import {
  HeaderContainer,
  Container,
  Logo,
  LogoDiv,
  LogoImg,
  Location,
  LocationDiv,
  Wrapper,
  Content,
  MapContainer,
  DropdownMenu,
  UserButton,
  UserConteiner,
  UserWrapper,
  UserLabel,
  LoginContainer,
  InfoText,
  Separator,
  ListItem,
  Icon
} from './styles'

export function Header() {
  const { user, logout } = useUser()
  const [logoSrc, setLogoSrc] = useState(LogoLarg)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleMouseEnter = () => {
    setIsMenuOpen(true) // Abre o menu quando o mouse entra
  }
  const [isMapOpen, setIsMapOpen] = useState(false)

  // Função para alternar a visibilidade do menu
  const handleToggleMap = () => {
    setIsMapOpen(!isMapOpen)
  }

  // Função para abrir o menu ao passar o mouse sobre o botão
  const handleMouseMap = () => {
    setIsMapOpen(true)
  }

  const handleLogout = () => {
    logout()
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setLogoSrc(LogoMin)
      } else {
        setLogoSrc(LogoLarg)
      }
    }

    handleResize() // Chama ao carregar a página
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (auth.currentUser) {
        const idTokenResult = await auth.currentUser.getIdTokenResult()
        setIsAdmin(idTokenResult.claims.admin || false)
      }
    }
    checkAdminStatus()
  }, [])
  return (
    <HeaderContainer>
      {/* Logo */}
      <Container>
        <Wrapper>
          <Logo href="https://aventuradosbrinquedos.vercel.app">
            <LogoDiv>
              <LogoImg alt="Logo" src={logoSrc} />
            </LogoDiv>
          </Logo>

          {/* Location Button */}
          <Location>
            <LocationDiv
              onClick={handleToggleMap} // Alterna a visibilidade ao clicar
              onMouseEnter={handleMouseMap} // Abre o mapa ao passar o mouse
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                role="img"
                style={{ display: 'block', verticalAlign: 'middle' }}
              >
                <path d="M33.118 52.733c.924-.936 1.653-1.527 2.995-2.983 2.676-2.902 1.103-1.022 6.519-6.794 5.415-5.772 6.835-9.499 6.835-14.612C49.467 18.307 42.045 9 32.053 9S14.49 18.307 14.49 28.344c0 4.944 2.233 9.007 6.914 14.475 4.68 5.469 3.588 3.963 6.45 6.931 1.316 1.364 1.674 1.699 2.6 2.616.193.192 1.387 1.144 1.549 1.3.178-.176.897-.71 1.116-.933zM10.333 27.49c0-12.236 9.484-22.156 22.025-22.156 12.541 0 21.309 9.92 21.309 22.156 0 6.3-2.697 12.832-7.821 17.824-1.18 1.285-3.84 4.32-6.72 7.253-1.536 1.567-2.89 2.93-3.893 3.915-.549.54-.99.965-1.313 1.264-.182.168-.33.3-.45.4-.572.474-.73.505-1.358.52-1.002.023-.947-.04-6.672-5.806-3.062-3.084-5.751-5.897-6.737-7.074-5.106-5.636-8.37-12.198-8.37-18.296zM31.96 39c-5.575 0-10.626-5.102-10.626-10.973 0-5.87 5.051-10.36 10.626-10.36 5.575 0 10.708 4.49 10.708 10.36 0 5.87-5.133 10.973-10.708 10.973zm.036-4c3.61 0 6.672-3.081 6.672-6.878s-3.062-6.455-6.67-6.455c-3.61 0-6.664 2.571-6.664 6.368S28.387 35 31.995 35z"></path>
              </svg>
              <span>Manaus</span>
            </LocationDiv>

            {/* Exibe o mapa se o menu estiver aberto */}
            {isMapOpen && (
              <MapContainer isOpen={isMapOpen}>
                <iframe
                  className="relative laptop:w-[650px] laptop:right-[250px] laptop:h-[300px] mobile:h-[300px] mobile:w-[420px] tablet:right-[250px] tablet:top-10 tablet:w-[450px] tablet:h-[120px] laptop:drop-shadow-[0_10px_10px_rgba(0,0,0,10)] mobile:overflow-hidden"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1681625904985!2d-59.94737492502912!3d-3.049598196926207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b8d7b61c27d%3A0x1d8b8b78d3186636!2sNova%20Igreja%20Batista%20Grande%20Circular!5e0!3m2!1spt-BR!2sbr!4v1725812051612!5m2!1spt-BR!2sbr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </MapContainer>
            )}
          </Location>

          <Content>
            {/* User Button */}
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <UserButton
                onClick={handleToggleMenu}
                onMouseEnter={handleMouseEnter}
              >
                <UserConteiner>
                  <UserWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      className="injected-svg"
                      role="img"
                      style={{ display: ' block', verticalAlign: 'middle' }}
                    >
                      {/* SVG Path */}
                      <path
                        fill=""
                        fillRule="evenodd"
                        d="M32 6.667c13.991 0 25.333 11.342 25.333 25.333 0 13.991-11.342 25.333-25.333 25.333C18.009 57.333 6.667 45.991 6.667 32 6.667 18.009 18.009 6.667 32 6.667zm0 14.75c-4.631 0-5.948 2.607-5.058 8.026.04.24.034.486-.014.724-.362 1.768.122 3.687 1.238 5.742.32.588 1.623 2.583 1.75 3.008.311 1.041-.265 2.14-1.298 2.476-5.486 1.784-10.476 3.566-12.52 4.555 3.883 4.52 9.642 7.385 16.069 7.385 6.318 0 11.99-2.768 15.868-7.158l-12.26-4.819c-1.163-.45-1.636-1.843-.986-2.907 1.344-2.202 2.24-4.029 2.688-5.451.367-1.164.395-1.915.238-2.246-.143-.301-.208-.633-.19-.966.373-6.9-.518-8.37-5.525-8.37zM32.167 11C20.477 11 11 20.477 11 32.167c0 3.817 1.01 7.398 2.778 10.49 2.005-1.05 6.496-2.693 11.192-4.272-.107-.184-.212-.37-.318-.566-1.458-2.683-2.165-5.351-1.713-8.079-.47-3.134-.282-5.824.804-7.973 1.428-2.83 4.245-4.35 8.257-4.35 4.048 0 6.728 1.094 8.228 3.568 1.199 1.976 1.506 4.493 1.313 8.581.724 2.175-.053 5.075-2.141 8.902l11.056 4.36c1.83-3.13 2.877-6.773 2.877-10.661C53.333 20.477 43.857 11 32.167 11z"
                      ></path>
                    </svg>
                  </UserWrapper>
                  <UserLabel className="hidden w-24 whitespace-pre-wrap text-sm leading-none md:block">
                    {user
                      ? `Bem-vindo ${user.displayName}`
                      : 'Entre ou Cadastre-se'}
                  </UserLabel>
                </UserConteiner>
              </UserButton>
            </div>

            {user ? (
              <DropdownMenu isOpen={isMenuOpen}>
                <LoginContainer>
                  <InfoText>Olá, {user.displayName}!</InfoText>
                  <Separator />
                  {isAdmin && (
                    <>
                      <ListItem>
                        <a href="/pedidos">Operações adm</a>
                      </ListItem>
                      <Separator />
                    </>
                  )}
                  <ListItem>
                    <a href="/checkin">Meus Pedidos</a>
                  </ListItem>
                  <Separator />
                  <ListItem onClick={handleLogout}>
                    <p>Sair da Conta</p>
                  </ListItem>
                </LoginContainer>
              </DropdownMenu>
            ) : (
              <DropdownMenu isOpen={isMenuOpen}>
                <LoginContainer>
                  <InfoText>Olá, faça seu login!</InfoText>
                  <Separator />
                  <ListItem>
                    <a href="/signin">
                      <Icon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                        <polyline points="10 17 15 12 10 7"></polyline>
                        <line x1="15" x2="3" y1="12" y2="12"></line>
                      </Icon>
                      Login
                    </a>
                  </ListItem>
                </LoginContainer>
              </DropdownMenu>
            )}
          </Content>
        </Wrapper>
      </Container>
    </HeaderContainer>
  )
}
