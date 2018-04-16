import React from 'react'
import { Query } from 'react-apollo'
import { MORE_QUOTES } from '../queries'
import { List, ListItem } from '../components/List'
import { Spinner } from '../components/icons'
import Quote from './Quote'
import { Button, ButtonContainer } from '../components/Button'

const QuoteListList = ({ quotes }) => (
  <List>
    {quotes.map(quote => (
      <ListItem key={quote.id}>
        <Quote {...quote} />
      </ListItem>
    ))}
  </List>
)

class QuoteListPaginator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      done: false,
      fetching: false
    }
    this.handleLoadMore = this.handleLoadMore.bind(this)
  } 
  
  handleLoadMore () {
    if (this.state.done) return

    const self = this
    const { data, fetchMore } = this.props
    const { quotes } = data
    const lastQuote = quotes[quotes.length - 1]

    self.setState({ fetching: true })

    fetchMore({
      query: MORE_QUOTES,
      variables: { after: lastQuote.id },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousQuotes = previousResult.quotes
        const newQuotes = fetchMoreResult.quotes
        const newLast = newQuotes[newQuotes.length - 1]
        
        self.setState({ fetching: false })

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
    if (this.state.fetching)  {
      return (
        <ButtonContainer>
          <Spinner />
        </ButtonContainer>
      )
    }   
    return (
      <ButtonContainer>
        {this.state.done
          ? <p>No more quotes.</p>
          : <Button onClick={this.handleLoadMore}>
            LOAD MORE
          </Button>}
      </ButtonContainer>
    )
  }
}

const QuoteList = () => (
  <Query
    query={MORE_QUOTES}
    variables={{ after: null }}
    fetchPolicy='network-only'
  >
    {({ error, loading, data, fetchMore }) => {
      if (error) return (
        <p>Error</p>
      )
      if (loading) return (
        <Spinner />
      )
      return (
        <div>
          <QuoteListList quotes={data.quotes} />
          <QuoteListPaginator data={data} fetchMore={fetchMore} />
        </div>
      )
    }}
  </Query>
)

export default QuoteList
