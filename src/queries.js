import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
  {
    allAuthors {
      id
      firstName
      lastName
    }
  }
`

export const MORE_QUOTES = gql`
  query quotes ($after: String) {
    quotes: allQuotes (orderBy: createdAt_DESC, first: 10, after: $after) {
      id
      body
      createdAt
      author {
        id
        firstName
        lastName
      }
    }
  }
`
