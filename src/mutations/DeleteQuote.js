import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_AUTHOR } from '../queries/GetAuthor'

export const DELETE_QUOTE = gql`
  mutation deleteQuote ($id: ID!) {
    deleteQuote (id: $id) {
      id
      body
    }
  }
`

const removeQuote = (deleteQuote, quotes) => {
  return quotes.filter(quote => quote.id !== deleteQuote.id)
}

class DeleteQuote extends React.Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update (cache, { data: { deleteQuote } }) {
    const { id: authorId } = this.props.quote.author
    const { author } = cache.readQuery({
      query: GET_AUTHOR,
      variables: { id: authorId }
    })
    const newQuotes = removeQuote(deleteQuote, author.quotes)
    cache.writeQuery({
      query: GET_AUTHOR,
      data: {
        author: {
          ...author,
          quotes: newQuotes
        }
      }
    })
  }

  render () {
    return (
      <Mutation mutation={DELETE_QUOTE} update={this.update}>
        {deleteQuote => this.props.children(deleteQuote)}
      </Mutation>
    )
  }
}

DeleteQuote.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.func.isRequired
}

export default DeleteQuote
