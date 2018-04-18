import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetAuthor from '../queries/GetAuthor'
import QuoteForm from '../containers/QuoteForm'
import CreateQuote from '../mutations/CreateQuote'
import { Main } from '../components/Layout'
import { Card, CardTitle } from '../components/card'

class AuthorQuoteCreateView extends React.Component {
  constructor (props) {
    super(props)
    this.goToAuthor = this.goToAuthor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  goToAuthor () {
    this.props.history.push(`/authors/${this.props.author.id}`)
  }

  handleSubmit ({ body }) {
    const { createQuote, author } = this.props
    createQuote({ variables: { body, authorId: author.id } })
    this.goToAuthor()
  }

  render () {
    const { firstName, lastName } = this.props.author

    return (
      <Main>
        <Card>
          <CardTitle>Add Quote for { `${firstName} ${lastName}` }</CardTitle>
          <QuoteForm onSubmit={this.handleSubmit} />
        </Card>
      </Main>
    )
  }
}

AuthorQuoteCreateView.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  createQuote: PropTypes.func.isRequired
}

const Wrapper = ({ history, match }) => {
  const { id } = match.params

  return (
    <GetAuthor id={id}>
      {author => (
        <CreateQuote authorId={author.id}>
          {createQuote => (
            <AuthorQuoteCreateView
              history={history}
              author={author}
              createQuote={createQuote}
            />
          )}
        </CreateQuote>
      )}
    </GetAuthor>
  )
}

export default withRouter(Wrapper)
