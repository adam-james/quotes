import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_QUOTE } from '../queries/GetQuote'

export const UPDATE_QUOTE = gql`
  mutation updateQuote($id: ID!, $body: String) {
    updateQuote(id: $id, body: $body) {
      id
      body
    }
  }
`

class UpdateQuote extends React.Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update (cache, { data: { updateQuote } }) {
    const { quote } = cache.readQuery({
      query: GET_QUOTE,
      variables: { id: this.props.id }
    })
    cache.writeQuery({
      query: GET_QUOTE,
      data: {
        quote: {
          ...quote,
          updateQuote
        }
      }
    })
  }

  render () {
    return (
      <Mutation mutation={UPDATE_QUOTE} update={this.update}>
        {updateQuote => this.props.children(updateQuote)}
      </Mutation>
    )
  }
}

UpdateQuote.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default UpdateQuote
