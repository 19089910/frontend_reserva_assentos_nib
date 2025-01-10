import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`

export const Header = styled.h1`
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImgContainer = styled.div`
  margin-right: 16px;

  img {
    width: 120px;
    height: auto;
    border-radius: 8px;
  }
`

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: 8px;

  h1 {
    font-size: 16px;
    color: #444;
    margin: 0;
  }
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
  }

  span {
    font-size: 14px;
    color: #666;
  }
`

export const Tags = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 8px;

  li {
    background-color: #ffe270;
    color: #333;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 16px;
    margin-right: 8px;
  }
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
