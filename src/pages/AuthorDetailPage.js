import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'
import { fullName } from '../containers/helpers'
import { GET_AUTHOR } from '../queries'
import { LinkButton } from '../components/Button'
import Error from '../components/Error'

const QuoteBody = styled.p`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5em;  
`

const Author = ({ firstName, lastName, quotes }) => (
  <ListSection
    title={`Quotes from ${fullName({ firstName, lastName })}`}
    items={quotes}
  >
    {({ body }) => <QuoteBody>{body}</QuoteBody>}
  </ListSection>
)

const render = rendersQuery(({ data }) => (
  <Main>
    <LinkButton to={`/authors/${data.author.id}/add-quote`}>
      + Add Quote
    </LinkButton>
    <Author {...data.author} />
  </Main>
))

const AuthorDetailPage = ({ match }) => {
  const { id } = match.params
  return (
    <Query query={GET_AUTHOR} variables={{ id }}>
      {render}
    </Query>
  )
}

export default withRouter(AuthorDetailPage)
