import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Main } from '../components/Layout'
import ListSection from '../containers/ListSection'
import rendersQuery from '../containers/rendersQuery'

/**
 * TODO:
 *  - sort by date
 *  - add pagination
 */

const ALL_QUOTES = gql`
  {
    allQuotes (orderBy: createdAt_DESC) {
      id
      body
      createdAt
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

const DateAdded = styled.p`
  ${shared()}
  margin-top: 0.5em;
`

const Quote = ({ author, body, createdAt, id }) => (
  <article>
    <Body>{body}</Body>
    <Author>-- <Link to={`/authors/${author.id}`}>{author.name}</Link></Author>
    <DateAdded>Added {moment(createdAt).fromNow()}</DateAdded>
  </article>
)

const render = rendersQuery(({ data }) => (
  <Main>
    <ListSection title="Quotes" items={data.allQuotes}>
      {(quote) => <Quote {...quote} />}
    </ListSection>
  </Main>
))

const QuoteListPage = () => (
  <Query query={ALL_QUOTES}>
    {render}
  </Query>
)

export default QuoteListPage
