import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-form'
import {
  FormError,
  FormLabel,
  FormSubmit,
  FormText
} from '../components/form'

const required = value => ({
  error: (!value) ? 'The field above is required.' : null
})

const AuthorForm = ({ firstName, lastName, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>

        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <FormText
          field='firstName'
          id='firstName'
          validate={required}
          defaultValue={firstName || ''}
        />
        <FormError errors={formApi.errors} field='firstName' />

        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <FormText
          field='lastName'
          id='lastName'
          validate={required}
          defaultValue={lastName || ''}
        />
        <FormError errors={formApi.errors} field='lastName' />

        <FormSubmit>Submit</FormSubmit>
      </form>
    )}
  </Form>
)

AuthorForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AuthorForm
