import styled from 'styled-components'

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
  text-align: center;
  height: 60px;
  box-sizing: border-box;
  padding-top: 18px;
  border-bottom: 2px solid black;
`

export const PageNav = styled.nav`
  border-bottom: 1px solid black;
`

export const PageNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`

export const PageNavListItem = styled.li`
  ${({ active }) => `
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 1em;
    width: 50%;
    text-align: center;

    a {
      text-decoration: none;
      color: black;
    }

    ${active && `
      a {
        text-decoration: underline;
      }
    `}
  `}
`

export const PageHeader = styled.header``
