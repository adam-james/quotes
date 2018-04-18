import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, CardTitle } from '../components/card'
import { Main } from '../components/Layout'
import AuthorForm from '../containers/AuthorForm'

export const CREATE_AUTHOR = gql`
  mutation createAuthor($firstName: String!, $lastName: String!) {
    createAuthor(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export class AuthorCreateView extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit ({ firstName, lastName }) {
    this.props.createAuthor({ variables: { firstName, lastName } })
  }

  render () {
    return (
      <Main>
        <Card>
          <CardTitle>Create Author</CardTitle>
          <AuthorForm onSubmit={this.handleSubmit} />
        </Card>
      </Main>
    )
  }
}

AuthorCreateView.propTypes = {
  createAuthor: PropTypes.func.isRequired
}

class Wrapper extends React.Component {
  constructor (props) {
    super(props)
    this.updateQuery = this.updateQuery.bind(this)
  }

  updateQuery (cache, { data: { createAuthor } }) {
    this.props.history.push(`/authors/${createAuthor.id}`)
  }

  render () {
    return (
      <Mutation
        mutation={CREATE_AUTHOR}
        update={this.updateQuery}
      >
        {(createAuthor) => (
          <AuthorCreateView createAuthor={createAuthor} />
        )}
      </Mutation>
    )
  }
}

export default withRouter(Wrapper)
