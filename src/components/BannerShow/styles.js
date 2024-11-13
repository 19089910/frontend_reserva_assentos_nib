import styled from 'styled-components'

export const Header = styled.header`
  max-width: 1440px;

  margin-top: 0;
  margin-bottom: 0;

  margin-left: auto;
  margin-right: auto;
`
export const Container = styled.div`
  margin-bottom: 1.25rem;

  position: relative;
`
export const Banner = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;

  object-fit: cover;
  max-width: 100%;
  height: auto;

  display: block;
  vertical-align: middle;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  pointer-events: none; /* Impede que o overlay interfira na interação do conteúdo */
`
export const Main = styled.main`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  padding-left: 1rem;
  padding-right: 1rem;

  gap: 1rem;

  display: flex;

  top: 1rem;
`
export const Poster = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: relative;

  border-radius: 0;
  overflow: hidden;
  width: 116px;
  height: 172px;
  display: flex;
  box-sizing: border-box;
  z-index: 2;
  @media (min-width: 992px) {
    width: 184px;
  }

  @media (min-width: 992px) {
    height: 272px;
  }
`
export const PosterImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;

  -o-object-fit: cover;
  object-fit: cover;

  box-sizing: border-box;

  max-width: 100%;
  height: auto;

  display: block;
  vertical-align: middle;
`
export const Details = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  justify-content: center;

  align-items: center;

  z-index: 20;

  position: relative;
`
export const Title = styled.h1`
  gap: 0.5rem;
  align-items: center;
  display: flex;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin-bottom: 1rem;

  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-left: 0;
  margin-right: 0;
  font-family: '__UOL_BOLD_TEXT_0090c7', '__UOL_BOLD_TEXT_Fallback_0090c7';
  font-weight: inherit;
  margin: 0;
`
export const Session = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
`
export const Info = styled.div`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 1.5rem;
`
export const Rating = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 0.75rem;
  .rating {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
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
  }
`
export const Age = styled.div`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: '__UOL_BOLD_TEXT_0090c7', '__UOL_BOLD_TEXT_Fallback_0090c7';
  text-align: center;
  background-color: rgb(0 149 218);
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  min-width: 1.5rem;
  width: 19px;
  min-height: 1.5rem;
  height: 19px;
  display: inline-flex;
  cursor: pointer;
`
export const Duration = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  padding-right: 1rem;

  box-sizing: border-box;
  border: 0 solid #e5e7eb;

  border-style: solid;
  border-right-width: 2px;
  margin-right: 1rem;
  border-color: rgba(97, 118, 148);
`
export const DescriptionContainer = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 992px) {
    display: flex;
    max-width: 500px;
    align-items: flex-start;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

export const DescriptionText = styled.span`
  line-height: 1;
  font-size: 0.875rem;
  max-width: 400px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const ReadMoreButton = styled.a`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: var(--uol-text);
  color: rgb(152 170 236 / 1);
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  gap: 0.5rem;
  text-decoration: inherit;
`
export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  padding: 0;
  width: fit-content;
  min-height: 3rem;
  cursor: pointer;
  color: rgba(152, 170, 236, var(--tw-text-opacity, 1));
  font-size: 0.875rem; /* text-sm */
  line-height: 1.25rem;

  /* Propriedades CSS para aplicar estilo consistente */
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  margin: 0;

  /* Remove estilos padrão do botão */
  -webkit-appearance: button;
  background-image: none;
  text-transform: none;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  @media (min-width: 992px) {
    font-size: 1rem; /* lg:text-base */
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 60, 70, var(--tw-bg-opacity, 1));
  border-radius: 50%;
  width: 2rem; /* size-8 */
  height: 2rem;
`

export const StyledSvg = styled.svg`
  width: 1rem; /* size-4 */
  height: 1rem;
  display: block;
  vertical-align: middle;
  .path {
  }
`
