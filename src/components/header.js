import styled from 'styled-components'

const theme = {
  primary: '#3E2723',
  primaryText: '#FFFFFF',
  primaryLight: '#6a4f4b',
  primaryDark: '#1b0000',
  secondary: '#616161',
  secondaryLight: '#8e8e8e',
  secondaryDark: '#373737',
  font: 'Baskerville'
}

export const Header = styled.header`
  height: 65px;
  padding-top: 19px;
  box-sizing: border-box;

  background-color: ${theme.primary};
  color: ${theme.primaryText};
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  text-align: center;

  color: ${theme.primaryText};
  font-family: ${theme.font};
`
