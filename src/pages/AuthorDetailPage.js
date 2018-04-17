import React from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'
import { GET_AUTHOR } from '../queries'
import { LinkButton } from '../components/Button'
import { AuthorCard, AuthorQuotes } from '../components/AuthorDetail'

/**
 * Todo add author quotes
 */

const render = rendersQuery(({ data }) => (
  <Main>
    <LinkButton to={`/authors/${data.author.id}/add-quote`}>
      + Add Quote
    </LinkButton>
    <AuthorCard
      {...data.author}
      numQuotes={data.author._quotesMeta.count}
    />
    <AuthorQuotes quotes={data.author.quotes} />
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
