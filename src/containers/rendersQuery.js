import React from 'react'
import { Main } from '../components/Layout'
import { Spinner } from '../components/icons'
import Error from '../components/Error'

const rendersQuery = (Render) => (props) => {
  if (props.loading) {
    return (
      <Main>
        <Spinner />
      </Main>
    )
  }
  if (props.error) {
    return (
      <Main>
        <Error />
      </Main>
    )
  }
  return <Render {...props} />
}

export default rendersQuery
