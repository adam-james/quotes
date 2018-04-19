import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetQuote from '../queries/GetQuote'
import DeleteQuote from '../mutations/DeleteQuote'
import {
  Card,
  CardActions,
  CardInfo,
  CardTitle
} from '../components/card'
import { Main } from '../components/Layout'
import { SecondaryLink, WarningButton } from '../components/Button'

class QuoteDeleteView extends React.Component {
  constructor (props) {
    super(props)
    this.goToAuthor = this.goToAuthor.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  goToAuthor () {
    this.props.history.push(`/authors/${this.props.quote.author.id}`)
  }

  handleDelete () {
    const { deleteQuote, quote } = this.props
    deleteQuote({ variables: { id: quote.id } })
    this.goToAuthor()
  }

  render () {
    const { quote } = this.props
    const { firstName, lastName } = quote.author

    return (
      <Main>
        <Card>
          <CardTitle>Are you sure you want to delete this quote?</CardTitle>
          <CardInfo><em>"{ quote.body }"</em> -- { firstName + ' ' + lastName }</CardInfo>
          <CardActions>
            <SecondaryLink to={`/quotes/${quote.id}/edit`}>Cancel</SecondaryLink>
            <WarningButton onClick={this.handleDelete}>Delete</WarningButton>            
          </CardActions>
        </Card>
      </Main>
    )
  }
}

QuoteDeleteView.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  deleteQuote: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const Wrapper = ({ history, match }) => {
  const { id } = match.params

  return (
    <GetQuote id={id}>
      {quote => (
        <DeleteQuote quote={quote}>
          {deleteQuote => (
            <QuoteDeleteView
              quote={quote}
              deleteQuote={deleteQuote}
              history={history}
            />
          )}
        </DeleteQuote>
      )}
    </GetQuote>
  )
}

export default withRouter(Wrapper)
