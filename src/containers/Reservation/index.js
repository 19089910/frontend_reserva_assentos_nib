import React from 'react'

import PosterImgS from '../../assets/poster.png'
import { useSeats } from '../../hooks/SeatContext.js'
import { formatDateYear, formatTime } from '../../util/formatDateGrup.js'
import {
  Container,
  Header,
  Content,
  ImgContainer,
  SesionDetails,
  ListItem,
  InfoRow,
  InfoRowDiv,
  Tags,
  MapLink,
  Section,
  InfoRowlocation,
  InfoRowContainer,
  Listitems,
  FlexColum,
  IconContent,
  Description,
  Title,
  TextInfo
} from './styles.js'

export function Reservation() {
  const { seatsInfo } = useSeats()

  return (
    <Container>
      <Header>Meus Pedidos</Header>
      <Content>
        <Section>
          <div style={{ flex: '0 0 100%' }}>
            <ImgContainer>
              <img src={PosterImgS} alt="poster-img" />
            </ImgContainer>
            <ListItem>
              <InfoRow>
                <h1>{seatsInfo.showName || 'Show não definido'}</h1>
              </InfoRow>
              <InfoRowDiv>
                <div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 2.5a.5.5 0 0 1 1 0v.167h5V2.5a.5.5 0 0 1 1 0v.167h1.25c.69 0 1.25.56 1.25 1.25v8.833c0 .69-.56 1.25-1.25 1.25h-9.5C2.56 14 2 13.44 2 12.75V3.917c0-.69.56-1.25 1.25-1.25H4.5V2.5Zm6 1.167V4.5a.5.5 0 0 0 1 0v-.833h1.25a.25.25 0 0 1 .25.25V6.25H3V3.917a.25.25 0 0 1 .25-.25H4.5V4.5a.5.5 0 0 0 1 0v-.833h5ZM13 6.75H3v6c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-6ZM5.667 8.917a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM5 12a.667.667 0 1 0 0-1.333A.667.667 0 0 0 5 12Zm3.667-3.083a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM8 12a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 12Zm3.667-3.083a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM11 12a.667.667 0 1 0 0-1.333A.667.667 0 0 0 11 12Z"
                    ></path>
                  </svg>
                </div>

                <span>{formatDateYear(seatsInfo.showDateTime)}</span>
              </InfoRowDiv>

              <InfoRow style={{ paddingTop: '8px' }}>
                <div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.278 13.183c.231-.234.413-.382.749-.746.67-.725.276-.255 1.63-1.698 1.354-1.443 1.709-2.375 1.709-3.653 0-2.51-1.856-4.836-4.354-4.836s-4.39 2.326-4.39 4.836c0 1.236.557 2.251 1.727 3.618 1.17 1.368.897.991 1.613 1.733.329.341.419.425.65.654.048.048.347.286.387.325.045-.044.225-.178.28-.233ZM2.582 6.872c0-3.06 2.37-5.539 5.506-5.539s5.327 2.48 5.327 5.539c0 1.575-.674 3.208-1.955 4.456-.295.321-.96 1.08-1.68 1.813-.384.392-.722.732-.973.979-.137.135-.247.241-.328.316a2.877 2.877 0 0 1-.113.1c-.143.118-.182.126-.34.13-.25.006-.236-.01-1.667-1.452-.766-.77-1.438-1.474-1.684-1.768-1.277-1.409-2.093-3.05-2.093-4.574ZM7.988 9.75c-1.393 0-2.656-1.276-2.656-2.744 0-1.467 1.263-2.59 2.656-2.59 1.394 0 2.677 1.123 2.677 2.59 0 1.468-1.283 2.744-2.677 2.744Zm.01-1c.902 0 1.667-.77 1.667-1.72 0-.949-.765-1.614-1.667-1.614s-1.666.643-1.666 1.592c0 .95.763 1.742 1.666 1.742Z"
                    ></path>
                  </svg>
                </div>
                <span>Av. Autaz Mirim, 7761 | Tancredo Neves</span>
              </InfoRow>
              <InfoRowDiv style={{ paddingTop: '4px' }}>
                <div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 14.333A6.333 6.333 0 1 1 8 1.666a6.333 6.333 0 0 1 0 12.667ZM7.5 12.5v.806a5.293 5.293 0 0 1-4.74-4.931h.74a.5.5 0 0 0 0-1H2.79A5.294 5.294 0 0 1 7.5 2.777V3.5a.5.5 0 0 0 1 0v-.73a5.294 5.294 0 0 1 4.791 4.605H12.5a.5.5 0 1 0 0 1h.822A5.293 5.293 0 0 1 8.5 13.314V12.5a.5.5 0 0 0-1 0Zm3.185-1.812a.5.5 0 0 0 .003-.707L8.52 7.794v-2.61a.5.5 0 1 0-1 0v3.022l2.458 2.48a.5.5 0 0 0 .707.002Z"
                    ></path>
                  </svg>
                </div>
                <span>{formatTime(seatsInfo.showDateTime)}</span>
              </InfoRowDiv>
              <Tags>
                {seatsInfo.seatNumber.map((sents, index) => (
                  <li key={index}>
                    <span>{sents}</span>
                  </li>
                ))}
              </Tags>
            </ListItem>
          </div>
        </Section>

        <SesionDetails>
          <InfoRowlocation>
            <div>
              <span>
                Nib Grande Circular | Av. Autaz Mirim, 7761 - Tancredo Neves
                Manaus
              </span>
              <MapLink
                href="https://www.google.com/maps/search/?api=1&query=Nova%20Igreja%20Batista%20Grande%20Circular"
                target="_blank"
                rel="noreferrer"
              >
                ver mapa do local
                <svg
                  style={{ paddingLeft: '3px' }}
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.278 13.183c.231-.234.413-.382.749-.746.67-.725.276-.255 1.63-1.698 1.354-1.443 1.709-2.375 1.709-3.653 0-2.51-1.856-4.836-4.354-4.836s-4.39 2.326-4.39 4.836c0 1.236.557 2.251 1.727 3.618 1.17 1.368.897.991 1.613 1.733.329.341.419.425.65.654.048.048.347.286.387.325.045-.044.225-.178.28-.233ZM2.582 6.872c0-3.06 2.37-5.539 5.506-5.539s5.327 2.48 5.327 5.539c0 1.575-.674 3.208-1.955 4.456-.295.321-.96 1.08-1.68 1.813-.384.392-.722.732-.973.979-.137.135-.247.241-.328.316a2.877 2.877 0 0 1-.113.1c-.143.118-.182.126-.34.13-.25.006-.236-.01-1.667-1.452-.766-.77-1.438-1.474-1.684-1.768-1.277-1.409-2.093-3.05-2.093-4.574ZM7.988 9.75c-1.393 0-2.656-1.276-2.656-2.744 0-1.467 1.263-2.59 2.656-2.59 1.394 0 2.677 1.123 2.677 2.59 0 1.468-1.283 2.744-2.677 2.744Zm.01-1c.902 0 1.667-.77 1.667-1.72 0-.949-.765-1.614-1.667-1.614s-1.666.643-1.666 1.592c0 .95.763 1.742 1.666 1.742Z"
                    fill="#666"
                  ></path>
                </svg>
              </MapLink>
            </div>
          </InfoRowlocation>
          <InfoRowContainer>
            <Listitems>
              <FlexColum>
                <li>
                  <IconContent>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.033 11.094c.153-1.545.447-4.539.752-7.646.09-.694.72-.948 1.082-.948h6.259c.615 0 1.066.41 1.125.948.13 1.49.516 5.656.701 7.646h.174s.427 0 .773.316c.333.33.351.785.351.785v.097h.105V9.583h-.601s-.102-.02-.165-.085c-.068-.065-.068-.177-.068-.177v-.566s-.018-.258.076-.346c.087-.096.345-.076.345-.076h2.176s.16 0 .246.076c.062.054.074.202.074.202v.755s-.019.097-.097.158c-.096.067-.216.06-.216.06h-.52v3.541s.016.248-.078.34c-.095.09-.337.077-.337.077h-.94v.207s0 .373-.312.728c-.232.26-.595.34-.73.36v1.888a1.667 1.667 0 0 1-3.333 0v-1.881H8.542v1.881a1.667 1.667 0 1 1-3.333 0v-1.881h-.377s-.525-.054-.803-.391c-.279-.337-.279-.701-.279-.701v-.158H2.642s-.095 0-.164-.07c-.069-.068-.082-.163-.082-.163V9.583h-.56s-.12 0-.192-.069c-.071-.069-.081-.161-.081-.161v-.73s-.009-.13.068-.205c.08-.085.211-.085.211-.085h2.374s.113 0 .188.076a.309.309 0 0 1 .075.191v.714s.007.117-.093.209c-.057.06-.198.06-.198.06h-.542v2.76h.104v-.152s.056-.503.279-.71c.39-.391.808-.387.808-.387h.196Zm8.092 3.75h.833v1.881a.417.417 0 0 1-.833 0v-1.881Zm-6.666 0v1.881a.417.417 0 0 0 .833 0v-1.881H6.46Zm-1.143-1.25c-.281 0-.312-.235-.316-.286v-.746c.004-.047.035-.262.313-.262h9.378a.28.28 0 0 1 .309.272v.726s0 .296-.306.296H5.316Zm8.434-2.504s-.652-7.163-.665-7.336c-.016-.14-.166-.212-.271-.212H7.297c-.196 0-.34.068-.368.274-.017.075-.679 7.23-.679 7.23l7.5.044ZM7.684 4.714l-.55 5.473a.313.313 0 0 0 .622.062l.55-5.472a.312.312 0 1 0-.622-.063Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </IconContent>
                  <Description>
                    <Title>Assentos Escolhidos:</Title>
                    <TextInfo>
                      {seatsInfo.seatNumber.map((sents, index) => (
                        <span key={index}>{sents}</span>
                      ))}
                    </TextInfo>
                  </Description>
                </li>
                <li>
                  <IconContent className="styled__IconContent-lchjFQ eYshIK">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.477 3.205c-.185.185-.17.518-.027.738.462.705.37 1.645-.231 2.247a1.793 1.793 0 0 1-2.248.232c-.219-.144-.539-.171-.724.013l-.94.941c-.576.576-.52 1.652.058 2.23L10.5 17.74c.578.578 1.69.671 2.266.096l.904-.942c.191-.19.11-.582-.048-.802a1.793 1.793 0 0 1 .192-2.307 1.792 1.792 0 0 1 2.306-.19c.22.157.608.242.798.052l.913-.877c.576-.576.483-1.652-.095-2.23L9.601 2.407a1.744 1.744 0 0 0-1.215-.483c-.38 0-.75.123-1.014.388l-.895.894Zm1.27.793.557-.557c.139-.138.315-.103.455.037l7.88 7.881c.14.14.2.34.062.479l-.557.557c-1.054-.518-2.383-.369-3.237.486-.855.854-1.008 2.187-.49 3.241l-.585.584c-.137.139-.356.096-.495-.044L3.473 8.8c-.14-.14-.175-.351-.037-.49l.626-.626c.399.18.825.274 1.245.274.677 0 1.339-.242 1.85-.753.83-.83 1.059-2.166.59-3.206ZM6.01 9.478A.313.313 0 0 0 6 9.918l4.346 4.507a.312.312 0 0 0 .45-.434L6.45 9.485a.312.312 0 0 0-.441-.008Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </IconContent>
                  <IconContent className="styled__Description-eLzXrd knThGi">
                    <small className="styled__Title-bOOAne dcQDuz">
                      Duração:
                    </small>
                    <div className="styled__TextInfo-gHekGY lbtuhI">80 min</div>
                    <div className="styled__TextInfo-gHekGY lbtuhI">1h20</div>
                  </IconContent>
                </li>
                <li>
                  <IconContent className="styled__IconContent-lchjFQ eYshIK">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 2.083a7.917 7.917 0 1 1 0 15.833 7.917 7.917 0 0 1 0-15.833Zm.053 1.354a6.615 6.615 0 1 0 0 13.229 6.615 6.615 0 0 0 0-13.23ZM10 4.583c.345 0 .625.28.625.625v.681A2.397 2.397 0 0 1 12.5 8.23a.625.625 0 0 1-1.25 0c0-.633-.513-1.146-1.146-1.146l-.061.001a1.146 1.146 0 0 0-1.085 1.144c0 .594.36 1.088.926 1.147h.011a2.396 2.396 0 0 1 .73 4.678v.738a.625.625 0 0 1-1.25 0v-.682A2.397 2.397 0 0 1 7.5 11.77a.625.625 0 1 1 1.25 0c0 .612.48 1.113 1.085 1.144l.06.002a1.146 1.146 0 0 0 0-2.292.625.625 0 0 1-.14-.016c-1.197-.123-2.047-1.14-2.047-2.38 0-1.069.7-1.974 1.667-2.283v-.737c0-.346.28-.625.625-.625Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </IconContent>
                  <IconContent>
                    <small>Total da sessão:</small>
                    <div>R$&nbsp;Entrada gratuita</div>
                  </IconContent>
                </li>
              </FlexColum>
              <FlexColum>
                <li>
                  <IconContent>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.999 2.083A7.916 7.916 0 0 1 17.915 10 7.916 7.916 0 0 1 10 17.916 7.916 7.916 0 0 1 2.082 10a7.916 7.916 0 0 1 7.917-7.917Zm0 4.61c-1.448 0-1.859.814-1.581 2.508a.628.628 0 0 1-.004.226c-.114.553.038 1.152.386 1.794.1.184.508.807.548.94a.626.626 0 0 1-.406.774c-1.715.558-3.275 1.115-3.913 1.424a6.606 6.606 0 0 0 5.022 2.307 6.598 6.598 0 0 0 4.958-2.236l-3.83-1.506a.625.625 0 0 1-.309-.909c.42-.688.7-1.259.84-1.704.114-.363.124-.598.074-.701a.617.617 0 0 1-.059-.302c.117-2.157-.161-2.616-1.726-2.616Zm.052-3.256a6.615 6.615 0 0 0-5.746 9.894c.624-.328 2.028-.842 3.497-1.336a8.5 8.5 0 0 1-.1-.177c-.455-.838-.676-1.672-.535-2.525-.147-.98-.088-1.82.25-2.492.448-.883 1.328-1.358 2.582-1.358 1.265 0 2.102.342 2.571 1.114.374.618.47 1.404.41 2.682.226.68-.016 1.586-.669 2.782l3.455 1.363a6.615 6.615 0 0 0-5.716-9.947h.001Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </IconContent>
                  <IconContent>
                    <small>Dados do cliente:</small>
                    <div>Nome: {seatsInfo.user.name}</div>
                    <div>Id do usuario: {seatsInfo.user.id}</div>
                    <div>email:{seatsInfo.user.email}</div>
                  </IconContent>
                </li>
                <li>
                  <IconContent>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.28 16.265c-3.48 1.266-7.393-.543-8.54-3.97-1.14-3.41.596-7.08 3.97-8.527 2.31-.667 4.235-.431 5.829.69a.625.625 0 1 0 .719-1.023c-1.932-1.358-4.26-1.637-6.933-.857a.626.626 0 0 0-.069.024C3.27 4.291 1.2 8.64 2.556 12.692c1.372 4.102 6.02 6.251 10.152 4.747 4.105-1.494 5.44-5.388 5.209-8.506-.026-.344-.175-.6-.591-.6-.417 0-.69.257-.66.6.243 2.76-.926 6.072-4.386 7.332ZM15.2 5.417l-5.981 6.067-1.875-3.34c-.178-.297-.62-.3-.916-.123-.296.178-.423.647-.245.943l2.448 4.085c.218.365.73.41 1.008.089l6.674-6.84c.226-.26.198-.743-.063-.969-.26-.226-.824-.173-1.05.088Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </IconContent>
                  <IconContent>
                    <small>
                      {formatDateYear(seatsInfo.showDateTime)}{' '}
                      {formatTime(seatsInfo.showDateTime)}
                    </small>
                    <div>Nº do pedido: </div>
                    <div>{seatsInfo._id}</div>
                  </IconContent>
                </li>
              </FlexColum>
            </Listitems>
          </InfoRowContainer>
        </SesionDetails>
      </Content>
    </Container>
  )
}
