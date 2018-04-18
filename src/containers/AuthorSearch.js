import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import debounce from 'lodash/debounce'
import gql from 'graphql-tag'
import { Card, CardTitle } from '../components/card'
import { SearchInput } from '../components/search'
import { Spinner } from '../components/icons'
import { AuthorList, SearchResults } from '../components/AuthorSearch'
import { SectionTitle } from '../components/Layout'
import RecentAuthorList from './RecentAuthorList'

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

const Content = ({ authors, loading, query }) => {
  if (loading) {
    return <Spinner />
  }
  if (authors.length === 0 && query.length === 0) {
    return <RecentAuthorList />
  }
  return (
    <section>
      <SectionTitle>Authors</SectionTitle>
      <AuthorList authors={authors} />
    </section>
  )
}

Content.propTypes = {
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  query: PropTypes.string.isRequired
}

export const splitQuery = query => {
  const trimmed = query.trim()
  const firstSpace = trimmed.indexOf(' ')
  const first = trimmed.substring(0, firstSpace)
  const last = trimmed.substring(firstSpace + 1)
  // If first, then first and last; otherwise, just first.
  return {
    first: first || last,
    last: first ? last : null
  }
}

export class AuthorSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authors: [], loading: false, query: '' }
    this.handleChange = this.handleChange.bind(this)
    this.fetchAuthors = debounce(this.fetchAuthors, 500).bind(this)
  }

  handleChange (e) {
    const { value: query } = e.target
    this.setState({ loading: true, query })
    this.fetchAuthors(query)
  }

  async fetchAuthors (query) {
    if (query === '') {
      return this.setState({ authors: [], loading: false })
    }

    const variables = splitQuery(query)
    const { data } = await this.props.client.query({
      query: SEARCH_AUTHORS,
      variables
    })
    this.setState({ authors: data.authors, loading: false })
  }

  render () {
    return (
      <section>
        <Card>
          <CardTitle>Search Authors</CardTitle>
          <SearchInput onChange={this.handleChange} />
          <SearchResults>{ this.state.authors.length } results</SearchResults>
        </Card>
        <Content {...this.state} />
      </section>
    )
  }
}

AuthorSearch.propTypes = {
  client: PropTypes.object.isRequired
}

const Container = () => (
  <ApolloConsumer>
    {client => (
      <AuthorSearch client={client} />
    )}
  </ApolloConsumer>
)

export default Container
