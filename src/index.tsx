import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { applyMiddleware, compose, createStore } from 'redux'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import { MiddlewareRequest } from 'apollo-client/transport/middleware'
import reducers from './reducers'

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
})

const TOKEN = 'ca95e40b1a61ce398dc4f228617d92fb849ce196'

// Apollo-NetworkInterface middleware (API authentication using the API key)
networkInterface.use([{
  applyMiddleware(req: MiddlewareRequest, next: Function) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed
    }
    req.options.headers.authorization = `Bearer ${TOKEN}` 

    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

const store = createStore(
  reducers({
    apollo: client.reducer()
    // router: routerReducer,
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
  )
)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
)
