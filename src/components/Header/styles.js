import styled from 'styled-components'

export const HeaderContainer = styled.header`
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

  flex-direction: column;
  width: 100%;
  display: flex;
  z-index: 98;
  top: 0;
  position: fixed;
`
export const Container = styled.div`
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
