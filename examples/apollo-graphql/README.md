# Adding Apollo Client to the Starter Kit

## Installation

To get started with Apollo, you can either install a few packages from npm or use the apollo-client-preset package, which bundles the _core_ packages together as a quick-start.

```bash
# Install with the preset package
yarn add apollo-client-preset react-apollo graphql-tag graphql

# Install each package independantly
yarn add apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag graphql
```

## Directory Structure

Copy the `GraphQL` folder into the root `src` folder. This is where the GraphQL client initialisation code will reside, as well as any shared GraphQL Queries, Fragments, etc.

## Create an ApolloClient

Open the newly created `src/GraphQL/client.js` file and ensure that the `uri` is set to the GraphQL API endpoint.

## Connect the ApolloClient to your React component tree

It is recommended that you inject the `ApolloProvider` component into your application at the highest level you can; for this reason we recommend making the following change to `src/index.js`:

```js
import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";
import { client } from "./GraphQL/client";

import "./index.scss";
import App from "./App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App.js", () => {
    render(App);
  });
}
```
