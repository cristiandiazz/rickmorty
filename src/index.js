import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider,InMemoryCache, HttpLink } from '@apollo/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
  })
});


ReactDOM.render(
    <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root')
);
