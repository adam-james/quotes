import React from 'react'
import PropTypes from 'prop-types'
import { Form, Text } from 'react-form'

const AuthorCreateForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>

        <label htmlFor="firstName">First Name</label>
        <Text field="firstName" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Text field="lastName" id="lastName" />

        <button type="submit">Submit</button>
      </form>
    )}
  </Form>
)

AuthorCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AuthorCreateForm