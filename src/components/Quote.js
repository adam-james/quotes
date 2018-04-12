import React from 'react'
import styled from 'styled-components'

const shared = () => `
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
`

const Body = styled.blockquote`
  ${shared()}
  line-height: 1.5em;
`

const Author = styled.p`
  ${shared()}
  margin-top: 0.5em;
`

const Quote = ({ author, children, className }) => (
  <article className={className}>
    <Body>{children}</Body>
    { author && <Author>-- {author}</Author> }
  </article>
)

export default Quote
