import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'
import { fullName } from './helpers';
import { ALL_AUTHORS } from '../queries'

/**
 * TODO
 *  - Organize by last name
 */

const Author = styled(
  ({ id, firstName, lastName, className }) => (
    <p className={className}>
      <Link to={`/authors/${id}`}>
        {fullName({ firstName, lastName })}
      </Link>
    </p>
  )
)`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
`

const render = rendersQuery(({ data }) => (
  <Main>
    <Link to="add-author">Add Author</Link>
    <ListSection title="Authors" items={data.authors}>
      {(author) => <Author {...author} />}
    </ListSection>
  </Main>
))

const AuthorListPage = () => (
  <Query query={ALL_AUTHORS}>
    {render}
  </Query>
)

export default AuthorListPage
