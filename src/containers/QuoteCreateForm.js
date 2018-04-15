import React from 'react'
import PropTypes from 'prop-types'
import { Form, Text } from 'react-form'

const QuoteCreateForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>

        <label htmlFor='body'>Quote</label>
        <Text field='body' id='body' />

        <button type='submit'>Submit</button>
      </form>
    )}
  </Form>
)

QuoteCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default QuoteCreateForm
