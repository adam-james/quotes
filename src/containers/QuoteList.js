import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../components/Layout'
import { List, ListItem } from '../components/List'

const shared = () => `
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
`

export const Body = styled.blockquote`
  ${shared()}
  line-height: 1.5em;
`

export const Author = styled.p`
  ${shared()}
  margin-top: 0.5em;
`

export const Quote = ({ authorId, authorName, id, children }) => (
  <article>
    <Body>{children}</Body>
    <Author>-- <Link to={`/authors/${authorId}`}>{authorName}</Link></Author>
  </article>
)

const QuoteList = ({ title, quotes }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    <List>
      {quotes.map(({ author, body, id }) => (
        <ListItem key={id}>
          <Quote authorName={author.name} authorId={author.id}>
            {body}
          </Quote>
        </ListItem>
      ))}
    </List>
  </section>
)

export default QuoteList
