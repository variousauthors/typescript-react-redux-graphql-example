import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://api.example.com/graphql'
})

const client = new ApolloClient({
  networkInterface,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
)
