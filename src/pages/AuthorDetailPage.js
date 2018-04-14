import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import styled from 'styled-components'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'
import { fullName } from './helpers'
import { GET_AUTHOR, CREATE_QUOTE } from '../queries'
import QuoteCreateForm from '../containers/QuoteCreateForm'

/**
 * TODO:
 *  - clear add quote form on submit
 */

const AddQuote = ({ id, firstName, lastName }) => {
  const update = (cache, { data: { createQuote } }) => {
    const { author } = cache.readQuery({
      query: GET_AUTHOR,
      variables: { id: id }
    })
    const data = {
      author: {
        ...author,
        quotes: author.quotes.concat([ createQuote ])
      }
    }
    cache.writeQuery({
      query: GET_AUTHOR,
      data
    })
  }

  return (
    <Mutation mutation={CREATE_QUOTE} update={update}>
      {createQuote => {
        const handleSubmit = ({ body }) => {
          createQuote({ variables: { body, authorId: id } })
        }

        return (
          <section>
            <h3>Add Quote for author {fullName({ firstName, lastName })}</h3>
            <QuoteCreateForm onSubmit={handleSubmit} />
          </section>
        )
      }}
    </Mutation>
  )
}

AddQuote.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

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
    <AddQuote {...data.author} />
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
