import React, { useEffect, useState } from 'react'

import PosterImgS from '../../assets/poster.png'
import { useSeats } from '../../hooks/SeatContext.js'
import api from '../../services/api.js'
import { formatDateYear, formatTime } from '../../util/formatDateGrup.js'
import {
  Container,
  Header,
  Content,
  ImgContainer,
  DetailsList,
  ListItem,
  InfoRow,
  Tags,
  MapLink,
  Separator
} from './styles.js'

export function Reservation() {
  const [show, setshow] = useState([])
  const { seatsInfo } = useSeats()

  useEffect(() => {
    async function loadShows() {
      try {
        const { data } = await api.get('/shows')
        setshow(data[0])
      } catch (error) {
        console.error('Erro ao carregar os shows:', error)
      }
    }

    loadShows()
  }, [])

  return (
    <Container>
      <Header>Meus Pedidos</Header>
      <Content>
        <ImgContainer>
          <img src={PosterImgS} alt="cartaz do filme Deadpool & Wolverine" />
        </ImgContainer>
        <DetailsList>
          <ListItem>
            <h1>{show?.showName || 'Show não definido'}</h1>
          </ListItem>
          <InfoRow>
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 2.5a.5.5 0 0 1 1 0v.167h5V2.5a.5.5 0 0 1 1 0v.167h1.25c.69 0 1.25.56 1.25 1.25v8.833c0 .69-.56 1.25-1.25 1.25h-9.5C2.56 14 2 13.44 2 12.75V3.917c0-.69.56-1.25 1.25-1.25H4.5V2.5Z"
                fill="#FFE270"
              />
            </svg>
            <span>{formatDateYear(seatsInfo.showDateTime)}</span>
          </InfoRow>
          <InfoRow>
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.278 13.183c.231-.234.413-.382.749-.746.67-.725.276-.255 1.63-1.698 1.354-1.443 1.709-2.375 1.709-3.653 0-2.51-1.856-4.836-4.354-4.836s-4.39 2.326-4.39 4.836c0 1.236.557 2.251 1.727 3.618 1.17 1.368.897.991 1.613 1.733.329.341.419.425.65.654.048.048.347.286.387.325.045-.044.225-.178.28-.233Z"
                fill="#666"
              />
            </svg>
            <span>Av. Autaz Mirim, 7761 | Tancredo Neves</span>
          </InfoRow>
          <InfoRow>
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14.333A6.333 6.333 0 1 1 8 1.666a6.333 6.333 0 0 1 0 12.667ZM7.5 12.5v.806a5.293 5.293 0 0 1-4.74-4.931h.74a.5.5 0 0 0 0-1H2.79A5.294 5.294 0 0 1 7.5 2.777V3.5a.5.5 0 0 0 1 0v-.73a5.294 5.294 0 0 1 4.791 4.605H12.5a.5.5 0 1 0 0 1h.822A5.293 5.293 0 0 1 8.5 13.314V12.5a.5.5 0 0 0-1 0Z"
                fill="#666"
              />
            </svg>
            <span>{formatTime(seatsInfo.showDateTime)}</span>
          </InfoRow>
          <Tags>
            <li>Dublado</li>
            <li>XPLUS</li>
          </Tags>
        </DetailsList>
      </Content>
      <Separator />
      <InfoRow>
        <span>
          Avenida Mário Ypiranga, 1300 - Luc LSL 03 - PISO Buriti Adrianópolis,
          Manaus
        </span>
        <MapLink
          href="https://www.google.com/maps/search/?api=1&query=UCI%20Manauara&zoom=18"
          target="_blank"
          rel="noreferrer"
        >
          ver mapa do local
        </MapLink>
        <Separator />
      </InfoRow>
    </Container>
  )
}
