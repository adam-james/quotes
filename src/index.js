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

function AuthorList ({ authors }) {
  return (
    <ul>
      {
        authors.map((author) => (
          <li key={author.id}>
            <Author name={author.name} />
          </li>
        ))
      }
    </ul>
  )
}

function Author ({ name }) {
  return (
    <p>{ name }</p>
  )
}

function App () {
  return (
    <ApolloProvider client={client}>
      <Authors />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
