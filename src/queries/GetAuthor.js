import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import handleQuery from './handleQuery'

export const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author: Author(id: $id) {
      id
      firstName
      lastName
      quotes {
        id
        body
      }
    }
  }
`

const GetAuthor = ({ id, children }) => (
  <Query query={GET_AUTHOR} variables={{ id }}>
    { handleQuery(({ data }) => children(data.author)) }
  </Query>
)

GetAuthor.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default GetAuthor
