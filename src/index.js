import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Routes from './Routes'
import injectGlobalStyles from './injectGlobalStyles'

injectGlobalStyles()

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjfyizhy38ho00100nny2nxcc'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
)
