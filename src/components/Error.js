import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: red;
  padding: 0.5em;
  border: 1px solid red;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin: 20px 0;
  text-align: center;
`

const Error = ({ message = 'An error occurred' }) => (
  <ErrorMessage>{ message }</ErrorMessage>
)

export default Error
