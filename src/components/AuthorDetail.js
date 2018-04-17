import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Card,
  CardInfo,
  CardTitle
} from '../components/card'
import { List, ListItem } from '../components/List'

const EditIcon = ({ height = 24, width = 24 }) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg'>
    <g fill='#455A64' fillRule='evenodd'>
      <path d='M.055 17.385v6.56h6.56l13.12-13.12-6.56-6.56-13.12 13.12zm5.724 4.542H4.092v-2.019H2.073v-1.687l1.435-1.435 3.706 3.705-1.435 1.436zm7.9-14.98c.232 0 .347.115.347.346a.365.365 0 0 1-.11.268l-8.547 8.547a.366.366 0 0 1-.268.11c-.231 0-.347-.116-.347-.347 0-.105.037-.194.11-.268l8.547-8.547a.365.365 0 0 1 .269-.11zM23.361 4.344L19.656.654c-.4-.4-.878-.6-1.435-.6-.568 0-1.04.2-1.42.6l-2.617 2.602 6.56 6.56 2.618-2.618c.389-.389.583-.862.583-1.419a2.02 2.02 0 0 0-.584-1.435z' />
    </g>
  </svg>
)

export const EditAuthor = styled(Link)`
  display: block;
  float: right;
  margin-top: -40px;
  margin-right: -10px;

  ${() => `
    ${EditIcon} {
      svg {
        height: 48px;
        width: 48px;
      }
    }
  `}
`

export const AuthorCard = ({ firstName, lastName, id, numQuotes }) => (
  <Card>
    <CardTitle>{ firstName + ' ' + lastName }</CardTitle>
    <CardInfo>{ numQuotes } quotes</CardInfo>
    <EditAuthor to={`/authors/${id}/edit`}><EditIcon /></EditAuthor>
  </Card>
)

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  numQuotes: PropTypes.number.isRequired
}

export const CardQuote = styled(Link)`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: italic;
  color: #373737;
  display: block;
  text-decoration: none;
  padding: 1em;
  text-align: center;
`

export const AuthorQuotes = ({ quotes }) => (
  <List>
    {quotes.map(({ body, id }) => (
      <ListItem key={id}>
        <CardQuote to={`/quotes/${id}/edit`}>
          { body }
        </CardQuote>
      </ListItem>
    ))}
  </List>
)

AuthorQuotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
}
