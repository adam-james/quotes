import styled from 'styled-components'

export const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  height: 65px;
  box-sizing: border-box;
  padding-top: 18px;
  background-color: #455A64;
`

export const PageNav = styled.nav`
`

export const PageNavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`

export const PageNavListItem = styled.li`
  ${({ active }) => `
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 48px;
    width: 50%;
    text-align: center;
    background-color: #455A64;

    a {
      text-decoration: none;
      color: #fff;
      display: block;
      width: 100%;
      height: 100%;
      padding-top: 1em;
    }

    ${active && `
      background-color: #1C313A;
    
      a {
        color: #fff;
      }
    `}
  `}
`

export const PageHeader = styled.header``
