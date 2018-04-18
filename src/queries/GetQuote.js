import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import handleQuery from './handleQuery'

export const GET_QUOTE = gql`
  query getQuote($id: ID!) {
    quote: Quote(id: $id) {
      id
      body
      author {
        id
        firstName
        lastName
      }
    }
  }
`

const GetQuote = ({ id, children }) => (
  <Query query={GET_QUOTE} variables={{ id }}>
    { handleQuery(({ data }) => children(data.quote)) }
  </Query>
)

GetQuote.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default GetQuote
