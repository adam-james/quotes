import React from 'react'
import { Query } from 'react-apollo'
import rendersQuery from './rendersQuery'
import { SectionTitle } from '../components/Layout'
import { RECENT_AUTHORS } from '../queries'
import { AuthorList } from '../components/AuthorSearch'

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
