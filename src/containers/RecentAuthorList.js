import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import rendersQuery from './rendersQuery'
import { SectionTitle } from '../components/Layout'
import { List, ListItem } from '../components/List'
import { RECENT_AUTHORS } from '../queries'
import { AuthorList } from '../components/AuthorSearch'

const render = rendersQuery(({ data }) => (
  <AuthorList authors={data.authors} recent />
))

/**
 * TODO
 *  - use polling to update recent authors
 */

const RecentAuthorList = () => (
  <section>
    <SectionTitle>Recently Added</SectionTitle>
    <Query query={RECENT_AUTHORS}>
      {render}
    </Query>
  </section>
)

export default RecentAuthorList
