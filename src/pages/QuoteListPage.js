import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import QuoteList from '../containers/QuoteList'
import { Main } from '../components/Layout'

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

export default function QuoteListPage () {
  return (
    <Query query={ALL_QUOTES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <Main>
            <QuoteList
              title="Recently Added Quotes"
              quotes={data.allQuotes}
              />
          </Main>
        )
      }}
    </Query>
  )
}
