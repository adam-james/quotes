import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function QuoteListPage () {
  return (
    <Query
      query={gql`
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
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return <QuoteList quotes={data.allQuotes} />
      }}
    </Query>
  )
}

function QuoteList ({ quotes }) {
  return (
    <section>
      <h2>All Quotes</h2>
      <ul>
        {
          quotes.map(quote => (
            <li key={quote.id}>
              <em>{ quote.body }</em> - {quote.author.name}
            </li>
          ))
        }
      </ul>
    </section>
  )
}
