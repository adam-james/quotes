import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-form'
import {
  FormError,
  FormLabel,
  FormSubmit,
  FormTextArea
} from '../components/form'

const required = value => ({
  error: (!value) ? 'The field above is required.' : null
})

const QuoteForm = ({ onSubmit, body }) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>

        <FormLabel htmlFor='body'>Quote</FormLabel>
        <FormTextArea
          field='body' id='body'
          validate={required}
          defaultValue={body}
        />
        <FormError errors={formApi.errors} field='body' />

        <FormSubmit>Save</FormSubmit>
      </form>
    )}
  </Form>
)

QuoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string
}

export default QuoteForm
