import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import rendersQuery from './rendersQuery'
import { SectionTitle } from '../components/Layout'
import { AuthorList } from '../components/AuthorSearch'

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

const render = rendersQuery(({ data }) => (
  <AuthorList authors={data.authors} recent />
))

const RecentAuthorList = () => (
  <section>
    <SectionTitle>Recently Added</SectionTitle>
    <Query query={RECENT_AUTHORS} pollInterval={1000 * 20}>
      {render}
    </Query>
  </section>
)

export default RecentAuthorList
