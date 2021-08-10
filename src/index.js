import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  useQuery,
} from "@apollo/client";
import { LOAD_CHARACTERS } from "./graphql/Queries";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
});

const CharactersQuery = () => {
  const { loading, error, data } = useQuery(LOAD_CHARACTERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return data.characters.results.map((character) => {
    return <p key={character.id}>{character.name}</p>;
  });
};

function App() {
  return (
    <div className="App">
      <CharactersQuery />
    </div>
  );
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
