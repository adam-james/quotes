import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetAuthor from '../queries/GetAuthor'
import { Main } from '../components/Layout'
import { Card, CardTitle } from '../components/card'
import AuthorForm from '../containers/AuthorForm'

export const AuthorEditView = ({ author }) => {
  return (
    <Main>
      <Card>
        <CardTitle>Edit Author</CardTitle>
        <AuthorForm {...author} onSubmit={(result) => {console.log(result)}} />
      </Card>
    </Main>
  )
}

AuthorEditView.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    quotes: PropTypes.array.isRequired
  }).isRequired,
  updateAuthor: PropTypes.func.isRequired
}

const Wrapper = ({ match }) => {
  const { id } = match.params

  return (
    <GetAuthor id={id}>
      {author => <AuthorEditView author={author} />}
    </GetAuthor>
  )
}

export default withRouter(Wrapper)
