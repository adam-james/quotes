import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_AUTHOR } from '../queries/GetAuthor'

const CREATE_QUOTE = gql`
  mutation CreateQuote($authorId: ID!, $body: String!) {
    createQuote(authorId: $authorId, body: $body) {
      id
      body
    }
  }
`

class CreateQuote extends React.Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update (cache, { data: { createQuote } }) {
    const { author } = cache.readQuery({
      query: GET_AUTHOR,
      variables: { id: this.props.authorId }
    })
    const data = {
      author: {
        ...author,
        quotes: author.quotes.concat([ createQuote ])
      }
    }
    cache.writeQuery({
      query: GET_AUTHOR,
      data
    })
  }

  render () {
    return (
      <Mutation mutation={CREATE_QUOTE} update={this.update}>
        {createQuote => this.props.children(createQuote)}
      </Mutation>
    )
  }
}

CreateQuote.propTypes = {
  authorId: PropTypes.string.isRequired
}

export default CreateQuote
