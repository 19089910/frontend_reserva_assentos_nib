import styled from 'styled-components'

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  border-top-width: 1px;
  border-color: rgb(33 38 45);
  font-size: 14px;
  background-color: var(--color-primary);
  padding: 50px 0;
  color: white;

  .container {
    @media (min-width: 576px) {
      max-width: 900px;
    }

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`
export const FooterWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const FooterInfo = styled.div`
  .logo {
    line-height: 0;
    margin-bottom: 25px;

    img {
      max-height: 100px;
      margin-right: 6px;
    }

    span {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
      font-family: var(--font-primary);
    }
  }

  p {
    font-size: 14px;
    font-family: var(--font-primary);
  }
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 16px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
    transition: 0.3s;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`
export const FooterContent = styled.section`
  text-align: center;
  margin-top: 25px;
  @media (min-width: 992px) {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (min-width: 768px) {
    max-width: 100%;
  }
`

export const FooterHeading = styled.h4`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
`

export const FooterContact = styled.div`
  p {
    line-height: 26px;
  }
`

export const Credits = styled.div`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  border-top-width: 1px;
  border-color: rgb(33 38 45);
  padding-top: 20px;
  text-align: center;
  font-size: 13px;

  a {
    color: #fff;
  }
`
