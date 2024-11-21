import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import React from 'react'

import {
  FooterContainer,
  FooterWrapper,
  FooterInfo,
  SocialLinks,
  FooterContent,
  FooterHeading,
  FooterContact,
  Credits
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterWrapper className="row gy-4">
          <section>
            <FooterInfo>
              <a className="logo">
                <img
                  src="https://nibgrandecircular.com/themes/strata/assets/images/Marca_20anos.png"
                  alt="NIB Grande Circular"
                />
              </a>
              <SocialLinks>
                <a
                  href="https://www.facebook.com/NIBGrandeCircular"
                  className="facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/nibgrandecircular/"
                  className="instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@NIBGrandeCircular"
                  className="youtube"
                >
                  <YouTubeIcon />
                </a>
              </SocialLinks>
            </FooterInfo>
          </section>

          <FooterContent>
            <FooterHeading>Contato</FooterHeading>
            <FooterContact>
              <p>
                Avenida Autaz Mirim, 7761 <br />
                Tancredo Neves
                <br />
                Manaus - AM - Brasil <br />
                <br />
                <strong>Telefone: </strong>
                <a
                  href="https://wa.me/5592984590712"
                  style={{ color: 'antiquewhite' }}
                >
                  +55 92 98459-0712
                </a>
                <br />
                <strong>E-mail: </strong>secretaria@nibgrandecircular.com
                <br />
              </p>
            </FooterContact>
          </FooterContent>
        </FooterWrapper>
      </div>

      <div className="container mt-4">
        <Credits>
          <h4 id="mudarcordireitos">@2024 LUCAS F. ALL RIGHTS RESERVED</h4>
        </Credits>
      </div>
    </FooterContainer>
  )
}
