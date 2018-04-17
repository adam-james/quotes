import gql from 'graphql-tag'

export const RECENT_AUTHORS = gql`
  {
    authors: allAuthors (orderBy: createdAt_DESC, first: 5) {
      id
      firstName
      lastName
      createdAt
      _quotesMeta {
        count
      }
    }
  }
`

export const SEARCH_AUTHORS = gql`
  query authors ($first: String!, $last: String) {
    authors: allAuthors (filter:{
      OR:[
        { firstName_contains: $first },
        { lastName_contains: $first },
        { firstName_contains: $last },
        { lastName_contains: $last }
      ]
    }) {
      id
      firstName
      lastName
      createdAt
      _quotesMeta {
        count
      }
    }
  }
`

export const ALL_AUTHORS = gql`
  {
    authors: allAuthors (orderBy: lastName_ASC) {
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
      _quotesMeta {
        count
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
