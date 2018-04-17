import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import QuoteForm from '../containers/QuoteForm'
import { GET_AUTHOR, CREATE_QUOTE } from '../queries'
import rendersQuery from '../containers/rendersQuery'
import { Main } from '../components/Layout'
import { Card, CardTitle } from '../components/card'

const AddQuote = ({ id, firstName, lastName, history }) => {
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
          history.push(`/authors/${id}`)
        }

        return (
          <Card>
            <CardTitle>Add Quote for { `${firstName} ${lastName}` }</CardTitle>
            <QuoteForm onSubmit={handleSubmit} />
          </Card>
        )
      }}
    </Mutation>
  )
}

AddQuote.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

const AuthorQuoteCreatePage = ({ match, history }) => {
  const { authorId } = match.params
  return (
    <Query query={GET_AUTHOR} variables={{ id: authorId }}>
      {rendersQuery(({ data }) => (
        <Main>
          <AddQuote {...data.author} history={history} />
        </Main>
      ))}
    </Query>
  )
}

export default withRouter(AuthorQuoteCreatePage)
