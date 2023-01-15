import React from "react";
import BookListQuery from "./components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Edge & Node Team</h1>
        <BookListQuery />
      </div>
    </ApolloProvider>
  );
}

export default App;
