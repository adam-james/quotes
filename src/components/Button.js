import styled from 'styled-components'
import { Link } from 'react-router-dom'

const shared = () => `
  font-family: 'Lato', sans-serif;
  height: 48px;
  display: block;
  width: 100%;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #1C313A;
  color: #fff;
  border-radius: 2px;
  border: none;
`

export const Button = styled.button`
  ${shared()}
`

export const LinkButton = styled(Link)`
  ${shared()}
  text-decoration: none;
  text-align: center;
  padding-top: 0.8em;
  box-sizing: border-box;
  margin-top: 20px;
`
