import React from 'react'
import { /*Mutation,*/ Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListSection from '../containers/ListSection'
import { Main } from '../components/Layout'
import rendersQuery from '../containers/rendersQuery'

const ALL_AUTHORS = gql`
  {
    allAuthors {
      id
      name
    }
  }
`

const Author = styled(
  ({ id, name, className }) => (
    <p className={className}>
      <Link to={`/authors/${id}`}>
        {name}
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
    <ListSection title="Authors" items={data.allAuthors}>
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

// const CREATE_AUTHOR = gql`
//   mutation createAuthor($name: String!) {
//     createAuthor(name: $name) {
//       id
//       name
//     }
//   }
// `

// /**
//  * NOTE: You don't need to call update function for update mutation.
//  * Objects will be updated in the cache.
//  */
// function CreateAuthor () {
//   let input

//   return (
//     <Mutation
//       mutation={CREATE_AUTHOR}
//       update={(cache, { data: { createAuthor } }) => {
//         const { allAuthors } = cache.readQuery({ query: ALL_AUTHORS })
//         cache.writeQuery({
//           query: ALL_AUTHORS,
//           data: { allAuthors: allAuthors.concat([ createAuthor ]) }
//         })
//       }}
//     >
//       {(createAuthor) => (
//         <form
//           onSubmit={e => {
//             e.preventDefault()
//             createAuthor({ variables: { name: input.value } })
//             input.value = ''
//           }}
//         >
//           <input
//             ref={node => {
//               input = node
//             }}
//           />

//           <button type='submit'>Add Author</button>
//         </form>
//       )}
//     </Mutation>
//   )
// }
