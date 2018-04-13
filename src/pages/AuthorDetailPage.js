import React from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'
import { fullName } from './helpers'

// class CreateQuoteForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { body: '' }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleSubmit (e) {
//     e.preventDefault()
//     this.props.onSubmit({ body: this.state.body })
//     this.setState({ body: '' })
//   }

//   handleChange (e) {
//     const { value } = e.target
//     this.setState({ body: value })
//   }

//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Add Quote</h3>
//         <input onChange={this.handleChange} value={this.state.body} />
//         <button type='submit'>Add Quote</button>
//       </form>
//     )
//   }
// }

const GET_AUTHOR = gql`
  query Author($id: ID!) {
    Author(id: $id) {
      id
      firstName
      lastName
      quotes {
        id
        body
      }
    }
  }
`

// const CREATE_QUOTE = gql`
//   mutation createQuote($authorId: ID!, $body: String!) {
//     createQuote(authorId: $authorId, body: $body) {
//       id
//       body
//     }
//   }
// `

// function CreateQuote ({ authorId }) {
//   const handleSubmit = (createQuote) => ({ body }) => {
//     createQuote({ variables: { authorId, body } })
//   }

//   return (
//     <Mutation
//       mutation={CREATE_QUOTE}
//       update={(cache, { data: { createQuote } }) => {
//         const { Author } = cache.readQuery({
//           query: GET_AUTHOR,
//           variables: { id: authorId }
//         })
//         const data = {
//           Author: {
//             ...Author,
//             quotes: Author.quotes.concat([ createQuote ])
//           }
//         }
//         cache.writeQuery({
//           query: GET_AUTHOR,
//           data
//         })
//       }}
//     >
//       {(createQuote) => (
//         <CreateQuoteForm onSubmit={handleSubmit(createQuote)} />
//       )}
//     </Mutation>
//   )
// }

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
    <Author {...data.Author} />
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
