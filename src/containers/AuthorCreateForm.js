import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-form'
import { Card, CardTitle } from '../components/card'
import {
  FormError,
  FormLabel,
  FormSubmit,
  FormText
} from '../components/form'

const required = value => ({
  error: (! value) ? 'The field above is required.' : null
})

const AuthorCreateForm = ({ onSubmit }) => (
  <Card>
    <CardTitle>Add Author</CardTitle>
    <Form onSubmit={onSubmit}>
      {formApi => (
        <form onSubmit={formApi.submitForm}>
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <FormText field='firstName' id='firstName' validate={required} />
          <FormError errors={formApi.errors} field='firstName' />          

          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <FormText field='lastName' id='lastName' validate={required} />
          <FormError errors={formApi.errors} field='lastName' />          

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
