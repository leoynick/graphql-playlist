import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetail from './components/BookDetail';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  state = { selected: null}

  selectBook = id => this.setState({ selected : id})

  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja's Reading List</h1>
          <BookList selectBook={this.selectBook}/>
          <BookDetail bookId={this.state.selected}/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
