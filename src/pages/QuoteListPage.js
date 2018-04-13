import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Main } from '../components/Layout'
import ListSection from '../containers/ListSection'

/**
 * TODO:
 *  - add better loading
 *  - sort by date
 *  - add pagination
 */

const ALL_QUOTES = gql`
  {
    allQuotes {
      id
      body
      author {
        id
        name
      }
    }
  }
`

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

const Quote = ({ author, body, id }) => (
  <article>
    <Body>{body}</Body>
    <Author>-- <Link to={`/authors/${author.id}`}>{author.name}</Link></Author>
  </article>
)

const render = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Main>
      <ListSection title="Quotes" items={data.allQuotes}>
        {(quote) => <Quote {...quote} />}
      </ListSection>
    </Main>
  ) 
}

export default function QuoteListPage () {
  return (
    <Query query={ALL_QUOTES}>
      {render}
    </Query>
  )
}
