import React from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const ALL_AUTHORS = gql`
  {
    allAuthors {
      id
      name
    }
  }
`

export default function AuthorListPage () {
  return (
    <Query query={ALL_AUTHORS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <main>
            <CreateAuthor />
            <AuthorList authors={data.allAuthors} />
          </main>
        )
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
              <Link to={`/authors/${author.id}`}>{ author.name }</Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

const CREATE_AUTHOR = gql`
  mutation createAuthor($name: String!) {
    createAuthor(name: $name) {
      id
      name
    }
  }
`

/**
 * NOTE: You don't need to call update function for update mutation.
 * Objects will be updated in the cache.
 */
function CreateAuthor () {
  let input

  return (
    <Mutation
      mutation={CREATE_AUTHOR}
      update={(cache, { data: { createAuthor } }) => {
        const { allAuthors } = cache.readQuery({ query: ALL_AUTHORS })
        cache.writeQuery({
          query: ALL_AUTHORS,
          data: { allAuthors: allAuthors.concat([ createAuthor ]) }
        })
      }}
    >
      {(createAuthor) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createAuthor({ variables: { name: input.value }})
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />

          <button type="submit">Add Author</button>
        </form>
      )}
    </Mutation>
  )
}
