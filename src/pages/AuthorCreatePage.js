import React from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import sortBy from 'lodash/sortBy'
import { Main } from '../components/Layout'
import { ALL_AUTHORS, CREATE_AUTHOR } from '../queries'
import AuthorCreateForm from '../containers/AuthorCreateForm'

const AuthorCreatePage = ({ history }) => (
  <Mutation
    mutation={CREATE_AUTHOR}
    update={(cache, { data: { createAuthor } }) => {
      const { authors } = cache.readQuery({ query: ALL_AUTHORS })
      const updated = sortBy(
        authors.concat([ createAuthor ]),
        author => author.lastName
      )
      cache.writeQuery({
        query: ALL_AUTHORS,
        data: { authors: updated }
      })
    }}
  >
    {(createAuthor) => {
      const handleSubmit = ({ firstName, lastName }) => {
        createAuthor({ variables: { firstName, lastName } })
        history.push('/authors')
      }

      return (
        <Main>
          <h2>Add Author Here</h2>
          <AuthorCreateForm onSubmit={handleSubmit} />
        </Main>
      )
    }}
  </Mutation>
)

export default withRouter(AuthorCreatePage)
