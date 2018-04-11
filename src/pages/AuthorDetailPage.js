import React from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_AUTHOR = gql`
  query Author($id: ID!) {
    Author(id: $id) {
      name
      quotes {
        id
        body
      }
    }
  }
`

function AuthorDetailPage ({ match }) {
  const { id } = match.params
  return (
    <Query query={GET_AUTHOR} variables={{ id }}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <main>
            <button onClick={() => refetch()}>Refetch</button>
            <ShowAuthor author={data.Author} />
          </main>
        )
      }}
    </Query>
  )
}

function ShowAuthor ({ author }) {
  return (
    <section>
      <h2>{author.name}</h2>
      <QuoteList quotes={author.quotes} />
    </section>
  )
}

function QuoteList ({ quotes }) {
  return (
    <section>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map(quote => (
            <li key={quote.id}>
              <em>{quote.body}</em>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default withRouter(AuthorDetailPage)
