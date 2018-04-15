import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import sortBy from 'lodash/sortBy'
import { Main } from '../components/Layout'
import { ALL_AUTHORS, CREATE_AUTHOR } from '../queries'
import AuthorCreateForm from '../containers/AuthorCreateForm'

export class Page extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit ({ firstName, lastName }) {
    this.props.createAuthor({ variables: { firstName, lastName } })
    this.props.history.push('/authors')
  }

  render () {
    return (
      <Main>
        <h2>Add Author Here</h2>
        <AuthorCreateForm onSubmit={this.handleSubmit} />
      </Main>
    )
  }
}

Page.propTypes = {
  createAuthor: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export const updateQuery = (cache, { data: { createAuthor } }) => {
  const { authors } = cache.readQuery({ query: ALL_AUTHORS })
  const updated = sortBy(
    authors.concat([ createAuthor ]),
    author => author.lastName
  )
  cache.writeQuery({
    query: ALL_AUTHORS,
    data: { authors: updated }
  })
}

const WithMutation = ({ history }) => (
  <Mutation
    mutation={CREATE_AUTHOR}
    update={updateQuery}
  >
    {(createAuthor) => (
      <Page createAuthor={createAuthor} history={history} />
    )}
  </Mutation>
)

export default withRouter(WithMutation)
