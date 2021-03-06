import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, TextArea } from 'react-form'
import Error from './Error'

export const FormText = styled(Text)`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  border: 1px solid #979797;
  color: #373737;
  padding: 0.5em;
  border-radius: 3px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 0.75em;
`

export const FormTextArea = styled(TextArea)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border: 1px solid #979797;
  border-radius: 3px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  border: 1px solid #979797;
  color: #373737;
  padding: 0.5em;
  margin-bottom: 0.75em;
  min-height: 100px;  
`

export const FormLabel = styled.label`
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: #373737;
  letter-spacing: 0.25px;
  text-align: left;
  display: block;
  padding-bottom: 0.5em;
`

export const FormSubmit = styled.button.attrs({
  type: 'submit'
})`
  padding-top: 12px
  padding-bottom: 17px;
  display: block;
  width: 100%;
  margin-top: 1em;
  cursor: pointer;
  background: #1C313A;
  border: none;
  border-radius: 2px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0.25px;
  text-align: center;
  text-transform: uppercase;
`

export const FormError = ({ errors, field }) => {
  const message = errors && errors[field]
  return message ? <Error message={message} /> : null
}

FormError.propTypes = {
  errors: PropTypes.object,
  field: PropTypes.string.isRequired
}
