import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function AuthorListPage () {
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
