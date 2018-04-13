import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Main } from '../components/Layout'
import ListSection from '../containers/ListSection'
import rendersQuery from '../containers/rendersQuery'
import { fullName } from './helpers'
import { MORE_QUOTES } from '../queries'

const shared = () => `
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
`

const Body = styled.blockquote`
  ${shared()}
  line-height: 1.5em;
`

const Author = styled.p`
  ${shared()}
  margin-top: 0.5em;
`

const DateAdded = styled.p`
  ${shared()}
  margin-top: 0.5em;
`

const ButtonContainer = styled.div`
  margin-bottom: 24px;
`

const LoadMoreButton = styled.button`
  border: 1px solid black;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 16px;
  padding: 0.5em;
  display: block;
  width: 100%;
  cursor: pointer;
`

const Quote = ({ author, body, createdAt, id }) => (
  <article>
    <Body>{body}</Body>
    <Author>-- <Link to={`/authors/${author.id}`}>{fullName(author)}</Link></Author>
    <DateAdded>Added {moment(createdAt).fromNow()}</DateAdded>
  </article>
)

class QuoteList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      done: false
    }
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  handleLoadMore () {
    if (this.state.done) return
    
    const self = this
    const { data, fetchMore } = this.props
    const { quotes } = data
    const lastQuote = quotes[quotes.length - 1]

    fetchMore({
      query: MORE_QUOTES,
      variables: { after: lastQuote.id },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousQuotes = previousResult.quotes
        const newQuotes = fetchMoreResult.quotes
        const newLast = newQuotes[newQuotes.length - 1]

        if (newLast) {
          return {
            after: newLast.id,
            quotes: [...previousQuotes, ...newQuotes]
          }
        }

        self.setState({ done: true })
        return {
          after: null,
          quotes: previousQuotes
        }
      }
    })
  }

  render () {
    const { quotes } = this.props.data
    return (
      <Main>
        <ListSection title="Quotes" items={quotes}>
          {(quote) => <Quote {...quote} />}
        </ListSection>

        <ButtonContainer>
          {this.state.done ?
            <p>No more quotes.</p> 
            :
            <LoadMoreButton onClick={this.handleLoadMore}>
              LOAD MORE
            </LoadMoreButton>}
        </ButtonContainer>

      </Main>
    )
  }
}

const render = rendersQuery(QuoteList)

const QuoteListPage = () => (
  <Query query={MORE_QUOTES} variables={{ after: null }}>
    {render}
  </Query>
)

export default QuoteListPage
