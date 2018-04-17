import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-form'
import { Card, CardTitle } from '../components/card'
import { FormLabel, FormSubmit, FormText } from '../components/form'

const AuthorCreateForm = ({ onSubmit }) => (
  <Card>
    <CardTitle>Add Author</CardTitle>
    <Form onSubmit={onSubmit}>
      {formApi => (
        <form onSubmit={formApi.submitForm}>
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <FormText field='firstName' id='firstName' />

          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <FormText field='lastName' id='lastName' />

          <FormSubmit>Add</FormSubmit>
        </form>
      )}
    </Form>
  </Card>
)

AuthorCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AuthorCreateForm
