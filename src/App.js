import React from "react";
import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

function App() {
  return (
    <div id="main">
      <h1>Edge & Node Team</h1>
      <BookList />
    </div>
  );
}

export default App;
