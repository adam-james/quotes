import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { fullName } from './helpers'
import {
  QuoteAuthor,
  QuoteBody,
  QuoteDateAdded,
  QuoteMeta
} from '../components/Quote'

const Quote = ({ author, body, createdAt }) => (
  <article>
    <QuoteBody>"{body}"</QuoteBody>
    <QuoteMeta>
      <QuoteAuthor to={`/authors/${author.id}`}>{fullName(author)}</QuoteAuthor>
      &nbsp; | &nbsp;
      <QuoteDateAdded>Added {moment(createdAt).fromNow()}</QuoteDateAdded>
    </QuoteMeta>
  </article>
)

Quote.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Quote
