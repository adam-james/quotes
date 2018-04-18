import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import GetAuthor from '../queries/GetAuthor'
import UpdateAuthor from '../mutations/UpdateAuthor'
import { Main } from '../components/Layout'
import { Card, CardTitle } from '../components/card'
import AuthorForm from '../containers/AuthorForm'

export class AuthorEditView extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit ({ firstName, lastName }) {
    const { id } = this.props.author
    this.props.updateAuthor({ variables: { id, firstName, lastName } })
    this.props.history.push(`/authors/${id}`)
  }

  render () {
    return (
      <Main>
        <Card>
          <CardTitle>Edit Author</CardTitle>
          <AuthorForm {...this.props.author} onSubmit={this.handleSubmit} />
        </Card>
      </Main>
    )
  }
}

AuthorEditView.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  updateAuthor: PropTypes.func.isRequired
}

const Wrapper = ({ match, history }) => {
  const { id } = match.params

  return (
    <GetAuthor id={id}>
      {author => (
        <UpdateAuthor id={author.id}>
          {updateAuthor => (
            <AuthorEditView
              author={author}
              updateAuthor={updateAuthor}
              history={history}
            />
          )}
        </UpdateAuthor>
      )}
    </GetAuthor>
  )
}

export default withRouter(Wrapper)
