import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import debounce from 'lodash/debounce'
import { SEARCH_AUTHORS } from '../queries'
import { Card, CardTitle } from '../components/card'
import { SearchInput } from '../components/search'
import { Spinner } from '../components/icons'
import { AuthorList, SearchResults } from '../components/AuthorSearch'

export class AuthorSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authors: [], loading: false }
    this.handleChange = this.handleChange.bind(this)
    this.fetchAuthors = debounce(this.fetchAuthors, 250).bind(this)
  }

  handleChange (e) {
    const { value: query } = e.target
    this.setState({ loading: true })
    this.fetchAuthors(query)
  }

  async fetchAuthors (query) {
    if (query === '') {
      return this.setState({ authors: [], loading: false })
    }

    const { data } = await this.props.client.query({
      query: SEARCH_AUTHORS,
      variables: { query: query }
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
        {this.state.loading
          ? <Spinner />
          : <AuthorList authors={this.state.authors} />}
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
