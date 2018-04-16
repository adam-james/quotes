import styled from 'styled-components'
import { Link } from 'react-router-dom'

const shared = () => `
  margin: 0;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`

export const QuoteBody = styled.blockquote`
  ${shared()}
  line-height: 1.5em;
  font-style: italic;
  font-size: 18px;
`

export const QuoteMeta = styled.p`
  margin: 0.5em 0 0.25em;
  text-align: center;
`

export const QuoteAuthor = styled(Link)`
  ${shared()}
  color: #1C313A;
`

export const QuoteDateAdded = styled.span`
  ${shared()}
  font-size: 14px;
`
