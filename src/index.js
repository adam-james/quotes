import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'
import './index.css'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjftrcwfa3gar0162yd9glw73'
})

function Authors () {
  return (
    <Query
      query={gql`
        {
          allAuthors {
            id
            name
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return <AuthorList authors={data.allAuthors} />
      }}
    </Query>
  )
}

function Quotes () {
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

function AuthorList ({ authors }) {
  return (
    <section>
      <h2>All Authors</h2>
      <ul>
        {
          authors.map((author) => (
            <li key={author.id}>
              <p>{ author.name }</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

function App () {
  return (
    <ApolloProvider client={client}>
      <div>
        <Authors />
        <Quotes />
      </div>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
