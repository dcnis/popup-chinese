
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem('apollo-token');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: 'https://podcast-chinese.herokuapp.com/v1/graphql',
  fetch,
  headers: getHeaders()
});
export default new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});
