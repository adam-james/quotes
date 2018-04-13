import React from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Main } from '../components/Layout'
import {ALL_AUTHORS } from '../queries'

const CREATE_AUTHOR = gql`
  mutation createAuthor($firstName: String!, $lastName: String!) {
    createAuthor(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

class CreateAuthorForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { target } = e
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          First Name
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </label>

        <label>
          Last Name
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>

        <button type='submit'>Add Author</button>
      </form>
    )
  }
} 

const AuthorCreatePage = ({ history }) => (
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
    {(createAuthor) => {
      const handleSubmit = ({ firstName, lastName }) => {
        createAuthor({ variables: { firstName, lastName } })
        history.push('/authors')
      }

      return (
        <Main>
          <h2>Add Author Here</h2>
          <CreateAuthorForm onSubmit={handleSubmit} />
        </Main>
      )
    }}
  </Mutation>
)

export default withRouter(AuthorCreatePage)
