import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
  {
    authors: allAuthors {
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

export const CREATE_AUTHOR = gql`
  mutation createAuthor($firstName: String!, $lastName: String!) {
    createAuthor(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const CREATE_QUOTE = gql`
  mutation createQuote($authorId: ID!, $body: String!) {
    createQuote(authorId: $authorId, body: $body) {
      id
      body
    }
  }
`
