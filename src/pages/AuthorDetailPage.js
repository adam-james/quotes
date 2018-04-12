import React from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'

class CreateQuoteForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { body: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit({ body: this.state.body })
    this.setState({ body: '' })
  }

  handleChange (e) {
    const { value } = e.target
    this.setState({ body: value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Quote</h3>
        <input onChange={this.handleChange} value={this.state.body} />
        <button type='submit'>Add Quote</button>
      </form>
    )
  }
}

const GET_AUTHOR = gql`
  query Author($id: ID!) {
    Author(id: $id) {
      id
      name
      quotes {
        id
        body
      }
    }
  }
`

function AuthorDetailPage ({ match }) {
  const { id } = match.params
  return (
    <Query query={GET_AUTHOR} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <main>
            <CreateQuote authorId={data.Author.id} />
            <ShowAuthor author={data.Author} />
          </main>
        )
      }}
    </Query>
  )
}

function ShowAuthor ({ author }) {
  return (
    <section>
      <h2>{author.name}</h2>
      <QuoteList quotes={author.quotes} />
    </section>
  )
}

function QuoteList ({ quotes }) {
  return (
    <section>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map(quote => (
            <li key={quote.id}>
              <em>{quote.body}</em>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

const CREATE_QUOTE = gql`
  mutation createQuote($authorId: ID!, $body: String!) {
    createQuote(authorId: $authorId, body: $body) {
      id
      body
    }
  }
`

function CreateQuote ({ authorId }) {
  const handleSubmit = (createQuote) => ({ body }) => {
    createQuote({ variables: { authorId, body } })
  }

  return (
    <Mutation
      mutation={CREATE_QUOTE}
      update={(cache, { data: { createQuote } }) => {
        const { Author } = cache.readQuery({
          query: GET_AUTHOR,
          variables: { id: authorId }
        })
        const data = {
          Author: {
            ...Author,
            quotes: Author.quotes.concat([ createQuote ])
          }
        }
        cache.writeQuery({
          query: GET_AUTHOR,
          data
        })
      }}
    >
      {(createQuote) => (
        <CreateQuoteForm onSubmit={handleSubmit(createQuote)} />
      )}
    </Mutation>
  )
}

export default withRouter(AuthorDetailPage)
