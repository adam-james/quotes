import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { fullName } from './helpers'

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
`

export const QuoteAuthor = styled.p`
  ${shared()}
  display: block;
  margin-top: 0.5em;
  color: #1C313A;
`

export const QuoteDateAdded = styled.p`
  ${shared()}
  margin-top: 0.75em;
  font-size: 14px;
`

const Quote = ({ author, body, createdAt, id }) => (
  <article>
    <QuoteBody>"{body}"</QuoteBody>
    <QuoteAuthor to={`/authors/${author.id}`}>{fullName(author)}</QuoteAuthor>
    <QuoteDateAdded>Added {moment(createdAt).fromNow()}</QuoteDateAdded>
  </article>
)

export default Quote
