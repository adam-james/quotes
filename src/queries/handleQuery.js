import React from 'react'
import { Container } from '../components/Layout'
import { Spinner } from '../components/icons'
import Error from '../components/Error'

const HandleLoading = () => (
  <Container>
    <Spinner />
  </Container>
)

const HandleError = () => (
  <Container>
    <Error />
  </Container>
)

const handleQuery = (Render) => (props) => {
  if (props.loading) return <HandleLoading />
  if (props.error) return <HandleError />
  return <Render {...props} />
}

export default handleQuery
