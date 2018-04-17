import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-form'
import { Card, CardTitle } from '../components/card'
import {
  FormError,
  FormLabel,
  FormSubmit,
  FormTextArea
} from '../components/form'

const required = value => ({
  error: (! value) ? 'The field above is required.' : null
})

const QuoteForm = ({ onSubmit, quote }) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>

        <FormLabel htmlFor='body'>Quote</FormLabel>
        <FormTextArea
          field='body' id='body'
          validate={required}
          value={quote ? quote.body : ''}
        />
        <FormError errors={formApi.errors} field='body' />

        <FormSubmit>Add</FormSubmit>
      </form>
    )}
  </Form>
)

QuoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  quote: PropTypes.shape({
    body: PropTypes.string.isRequired
  })
}

export default QuoteForm
