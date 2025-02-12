import styled from 'styled-components'

export const HeaderContainer = styled.header`
  flex-direction: column;
  width: 100%;
  display: flex;
  z-index: 98;
  top: 0;
  position: fixed;
`

export const Container = styled.div`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  background-color: #041218;
  color: #f0f0f0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  background-image: linear-gradient(to right, #202380 20%, #3255e2 100%);

  z-index: 2;
`

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    height: 4rem;
  }
  .max-w-screen-xl {
    max-width: 1440px;
  }

  justify-content: space-between;
  align-items: center;
  user-select: none;
  height: 50px;
  display: flex;

  margin-top: 0;
  margin-bottom: 0;

  margin-left: auto;
  margin-right: auto;
`
export const Logo = styled.a`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-right: 6rem;
  }
  color: rgb(152 170 236);
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-left: 0;
  padding-right: 0;
  background-color: transparent;
  border-style: none;
  border-radius: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 3rem;
  display: inline-flex;
  text-decoration: inherit;
`
export const LogoDiv = styled.div`
  @media (min-width: 600px) {
    width: 150px;
  }
  width: 1.75rem;
  height: 2.25rem;
  position: relative;
`
export const LogoImg = styled.img`
  @media (min-width: 600px) {
    width: 75%;
  }
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0;
  color: transparent;
  vertical-align: baseline;
  max-width: none;
  display: inline-block;
`
export const Location = styled.div`
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  color: rgb(221 227 248);
  line-height: 1.25rem;
  font-size: 13px;
  font-family: var(--uol-text);
  padding: 0;
  border-style: none;
  border-radius: 0.75rem;
  white-space: nowrap;
  gap: 6px;
  justify-content: center;
  align-items: center;
  height: 3rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`
export const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  fill: #dde3f8;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 1rem;
  }
  svg {
    width: 22px;
    height: 22px;
  }
  span {
    font-size: 1rem;
    color: #fff;
  }
`
export const Content = styled.div`
  @media (min-width: 992px) {
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    gap: 0.75rem;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
`
export const MapContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 650px;
  height: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`
export const DropdownMenu = styled.span`
  display: ${(props) =>
    props.isOpen ? 'block' : 'none'}; /* Controla a visibilidade */
  position: absolute;
  top: 100%;
  color: #fff;
  border-radius: 4px;
  width: 200px;
  z-index: 9999;
`

export const UserButton = styled.div`
  color: rgb(152 170 236);

  font-size: 1.25rem;
  line-height: 1.75rem;

  font-family: var(--uol-text);

  padding-left: 0;
  padding-right: 0;

  border-style: none;
  border-radius: 0.75rem;
  white-space: nowrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
`
export const UserConteiner = styled.div`
  color: rgb(221 227 248);
  text-align: left;
  gap: 0.75rem;
  align-items: center;
  display: flex;
`
export const UserWrapper = styled.div`
  @media (min-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }
  fill: #dde3f8;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`
export const UserLabel = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
  line-height: 1;
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: pre-wrap;
  width: 6rem;
  display: none;
  margin: 0;
`
// Estilo para o Container de login
export const LoginContainer = styled.div`
  width: 10rem;
`

// Estilo para o parágrafo do texto
export const InfoText = styled.p`
  padding: 8px;
  font-size: 0.875rem; // text-sm equivalente
  color: #ccc; // Cor de texto padrão
`

// Estilo para o separador
export const Separator = styled.div`
  margin: 4px 0;
  height: 1px;
  background-color: #ccc; // cor de linha de separação
`

// Estilo para o item de lista com ícone
export const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0077cc; // cor de hover do item
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

// Estilo para o ícone
export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`
