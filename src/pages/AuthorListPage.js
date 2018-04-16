import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import { fullName } from '../containers/helpers'
import { SEARCH_AUTHORS } from '../queries'
import { LinkButton } from '../components/Button'

const Author = styled(
  ({ id, firstName, lastName, className, _quotesMeta }) => (
    <p className={className}>
      <Link to={`/authors/${id}`}>
        {fullName({ firstName, lastName })}
      </Link>
      &nbsp;
      ({ _quotesMeta.count } quotes)
    </p>
  )
)`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
`

const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'William Shakespeare'
})``

class AuthorSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authors: [] }
    this.handleChange = this.handleChange.bind(this)
    this.fetchAuthors = debounce(this.fetchAuthors, 250).bind(this)
  }

  handleChange (e) {
    const { value: query } = e.target
    this.fetchAuthors(query)
  }

  async fetchAuthors (query) {
    if (query === '') {
      return this.setState({ authors: [] })
    }

    const { data } = await this.props.client.query({
      query: SEARCH_AUTHORS,
      variables: { query: query }
    })
    this.setState({ authors: data.authors })
  }

  render () {
    return (
      <section>
        <h2>Search Authors</h2>
        <SearchInput onChange={this.handleChange} />
        <ListSection title='Authors' items={this.state.authors}>
          {(author) => <Author {...author} />}
        </ListSection>
      </section>
    )
  }
}

const AuthorListPage = () => (
  <ApolloConsumer>
    {client => (
      <Main>
        <LinkButton to='add-author'>+ Add Author</LinkButton>
        <AuthorSearch client={client} />
      </Main>
    )}
  </ApolloConsumer>
)

export default AuthorListPage
