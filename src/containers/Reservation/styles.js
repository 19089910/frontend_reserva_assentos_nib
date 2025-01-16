import styled from 'styled-components'

export const Container = styled.section`
  padding: 0px 10px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgb(255, 255, 255);
`

export const Content = styled.div`
  height: 830px;
  overflow: auto;
  scrollbar-width: none;
  margin: 1rem 10px 0px;
  background: rgb(33, 38, 45);
  border-radius: 8px;
`
export const Section = styled.section`
  display: flex; //talvez tirar
  flex-wrap: wrap;
  color: rgb(255, 255, 255);
`
export const ImgContainer = styled.div`
  position: relative;
  min-height: 1px;
  flex: 0 0 82%;

  img {
    margin-right: 1rem;
    width: 130px; //100px;
    display: block;
    max-width: 100%;
    height: auto;
    float: left;
    border-radius: 0px 0px 0px 8px;
  }
`
export const ListItem = styled.ul`
  overflow: hidden;
  list-style: none;
  margin-left: 8px;
`

export const InfoRow = styled.li`
  box-sizing: inherit;
  display: flex;
  padding-top: 12px;

  h1 {
    font-size: clamp(0.75rem, 3.5vw, 1rem);
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.1;
  }
  svg {
    fill: rgb(102, 102, 102);
    width: 16px;
    height: 16px;
    path {
      box-sizing: border-box;
      border: 0 solid #e5e7eb;
    }
  }

  span {
    font-size: 0.875rem;
    padding-top: 0px;
    line-height: 1.2;
    color: rgb(204, 204, 204);
    padding-left: 0.3125rem;
  }
`
export const InfoRowDiv = styled.div`
  box-sizing: inherit;
  display: flex;
  padding-top: 8px;
  span {
    padding-left: 0.3125rem;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.5;
    color: rgb(255, 226, 112);
  }
  svg {
    fill: rgb(255, 226, 112);
    width: 20px;
    height: 20px;
    margin-top: 1px;
    path {
      box-sizing: border-box;
      border: 0 solid #e5e7eb;
    }
  }
`
export const Tags = styled.ul`
  overflow: hidden;
  list-style: none;
  margin-left: 4px;
  li {
    display: inline-block;
    margin-right: 8px;

    span {
      display: inline-block;
      text-transform: uppercase;
      height: 100%;
      font-weight: bold;
      border-radius: 5px;
      letter-spacing: 0.05em;
      background-color: rgb(50, 85, 226);
      color: rgb(255, 255, 255);
      padding: 0.25rem 0.5rem;
      font-size: 15px; //10px;
    }
  }
`

export const DetailsList = styled.section`
  list-style: none;
  padding: 0;
`

export const MapLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`
export const Separator = styled.div`
  margin: 4px 0;
  height: 1px;
  background-color: #ccc; // cor de linha de separação
`
// Container principal para a linha de informações
export const InfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

// Estilo para cada item da lista
export const Listitems = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
`

// Contêiner para o ícone
export const IconContent = styled.div`
  margin-right: 1rem;
  svg {
    fill: #fff;
  }
`

// Estilo para o texto da descrição
export const Description = styled.div`
  display: flex;
  flex-direction: column;
`

// Estilo para o título da descrição
export const Title = styled.small`
  font-size: 0.875rem;
  color: #888;
`

// Estilo para as informações textuais
export const TextInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  color: #333;
  span {
    margin-right: 0.5rem;
  }
`
