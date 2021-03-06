import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetQuote from '../queries/GetQuote'
import { Main } from '../components/Layout'
import { Card, CardActions, CardTitle } from '../components/card'
import QuoteForm from '../containers/QuoteForm'
import UpdateQuote from '../mutations/UpdateQuote'
import { WarningLink } from '../components/Button'

export class QuoteEditView extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit ({ body }) {
    const { id, author } = this.props.quote
    this.props.updateQuote({ variables: { id, body } })
    this.props.history.push(`/authors/${author.id}`)
  }

  render () {
    return (
      <Main>
        <Card>
          <CardTitle>Edit Quote</CardTitle>
          <QuoteForm {...this.props.quote} onSubmit={this.handleSubmit} />
        </Card>
        <Card>
          <CardTitle>Actions</CardTitle>
          <CardActions style={{ paddingTop: '0px' }}>
            <WarningLink to={`/quotes/${this.props.quote.id}/delete`}>
              Delete Quote
            </WarningLink>
          </CardActions>
        </Card>
      </Main>
    )
  }
}

QuoteEditView.propTypes = {
  quote: PropTypes.shape({
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  updateQuote: PropTypes.func.isRequired
}

const Wrapper = ({ history, match }) => {
  const { id } = match.params

  return (
    <GetQuote id={id}>
      {quote => (
        <UpdateQuote id={quote.id}>
          {updateQuote => (
            <QuoteEditView
              quote={quote}
              updateQuote={updateQuote}
              history={history}
            />
          )}
        </UpdateQuote>
      )}
    </GetQuote>
  )
}

Wrapper.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withRouter(Wrapper)
