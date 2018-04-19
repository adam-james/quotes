import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_AUTHOR } from '../queries/GetAuthor'

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($id: ID!, $firstName: String, $lastName: String) {
    updateAuthor(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

class UpdateAuthor extends React.Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update (cache, { data: { updateAuthor } }) {
    const { author } = cache.readQuery({
      query: GET_AUTHOR,
      variables: { id: this.props.id }
    })
    cache.writeQuery({
      query: GET_AUTHOR,
      data: {
        author: {
          quotes: author.quotes,
          ...updateAuthor
        }
      }
    })
  }

  render () {
    return (
      <Mutation mutation={UPDATE_AUTHOR} update={this.update} >
        {updateAuthor => this.props.children(updateAuthor)}
      </Mutation>
    )
  }
}

UpdateAuthor.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default UpdateAuthor
