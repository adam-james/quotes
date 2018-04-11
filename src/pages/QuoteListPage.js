import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

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
              <em>{quote.body}</em> -
              <Link to={`/authors/${quote.author.id}`}>
                {quote.author.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
