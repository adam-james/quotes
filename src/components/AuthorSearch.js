import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { List, ListItem } from './List'
import { fullName } from '../containers/helpers'

export const SearchResults = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #1C313A;
  letter-spacing: 0.25px;
  text-align: center;
  margin-top: 18px;
`

export const AuthorName = styled.div`
  width: 50%;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #373737;
  letter-spacing: 0.25px;
  text-align: left;
`

export const AuthorNumQuotes = styled.div`
  width: 50%;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #373737;
  letter-spacing: 0.25px;
  text-align: right;
`

export const Author = styled(
  ({ name, id, className, numQuotes }) => (
    <Link
      to={`/authors/${id}`}
      className={className}
    >
      <AuthorName>{name}</AuthorName>
      <AuthorNumQuotes>{numQuotes} quotes</AuthorNumQuotes>
    </Link>
  )
)`
  display: flex;
  text-decoration: none;
  color: #373737;
  padding: 1em 2em;
`

export const AuthorList = ({ authors }) => (
  <List>
    {authors.map(author => (
      <ListItem key={author.id}>
        <Author
          name={fullName(author)}
          id={author.id}
          numQuotes={author._quotesMeta.count}
        />
      </ListItem>
    ))}
  </List>
)

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
}
