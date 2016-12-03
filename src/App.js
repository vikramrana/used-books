import React, { Component } from 'react';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import './App.css';
import { Button } from 'semantic-ui-react'

import BooksList from './components/BooksList'
import Header from './components/Header'
import SearchContainer from './containers/SearchContainer'
import sampleBooks from './sampleBooks'
import base from './base'


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: {},
      searchTerm : '',
    }
    this.addBook = this.addBook.bind(this)
    this.loadSampleBooks = this.loadSampleBooks.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.ref = base.syncState('books', {
      context: this,
      state: 'books',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addBook(book) {
    const books = {...this.state.books}
    const timestamp = Date.now()
    books[`book-${timestamp}`] = book
    this.setState({ books })
  }

  loadSampleBooks() {
    const books = {...this.state.books}
    this.setState({
      books: Object.assign({}, books, sampleBooks)
    })
  }

  removeBook(key) {
    const books = {...this.state.books}
    books[key] = null;
    this.setState({books})
  }

  handleSearch(searchTerm) {
    this.setState({
      searchTerm
    })
  }

  render() {
    return (
      <div className="App">
        <Header className='App-header' addBook={this.addBook}/>
        <SearchContainer search={this.handleSearch} books={this.state.books} className='search-container'/>
        <Button onClick={this.loadSampleBooks} primary>Load sample books</Button>
        <BooksList removeBook={this.removeBook} searchTerm={this.state.searchTerm} books={this.state.books} loadSampleBooks={this.loadSampleBooks}/>
      </div>
    );
  }
}

export default App;
