import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetAuthor from '../queries/GetAuthor'
import { Main } from '../components/Layout'
import { LinkButton } from '../components/Button'
import { AuthorCard, AuthorQuotes } from '../components/AuthorDetail'

export const AuthorDetailView = ({ author }) => (
  <Main>
    <LinkButton to={`/authors/${author.id}/add-quote`}>
      + Add Quote
    </LinkButton>
    <AuthorCard
      {...author}
      numQuotes={author.quotes.length}
    />
    <AuthorQuotes quotes={author.quotes} />
  </Main> 
)

AuthorDetailView.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    quotes: PropTypes.array.isRequired
  }).isRequired
}

const Wrapper = ({ match }) => {
  const { id } = match.params

  return (
    <GetAuthor id={id}>
      {author => <AuthorDetailView author={author} />}
    </GetAuthor>
  )
}

export default withRouter(Wrapper)
