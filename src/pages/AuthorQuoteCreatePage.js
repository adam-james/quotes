import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import QuoteCreateForm from '../containers/QuoteCreateForm'
import { GET_AUTHOR, CREATE_QUOTE } from '../queries'
import { fullName } from '../containers/helpers'
import rendersQuery from '../containers/rendersQuery'
import { Main } from '../components/Layout'

/**
 * TODO:
 *  - Style this up.
 */

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
