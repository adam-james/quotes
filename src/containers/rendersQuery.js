import React from 'react'
import styled from 'styled-components'
import { Main } from '../components/Layout'

export const HeadsUp = styled.section`
  border-radius: 2px;
  font-size: 20px;
  font-family: sans-serif;
  padding: 20px;
  text-align: center;
  margin-top: 16px;
  font-weight: 700;

  ${({ error, loading }) => `
    ${error && `
      border: 1px solid red;
      color: red;
    `}

    ${loading && `
      border: 1px solid blue;
      color: blue;
    `}
  `}
`

const rendersQuery = (Render) => (props) => {
  if (props.loading) {
    return (
      <Main>
        <HeadsUp loading>
          Loading...
        </HeadsUp>
      </Main>
    )
  }
  if (props.error) {
    return (
      <Main>
        <HeadsUp error>
          An error occurred.
        </HeadsUp>
      </Main>
    )
  }
  return <Render {...props} />
}

export default rendersQuery
