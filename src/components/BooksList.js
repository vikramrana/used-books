import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import UsedBookCard from './UsedBookCard'
// import FlipMove from 'react-flip-move'

class BooksList extends Component {

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={3}>
          {
            Object
            .keys(this.props.books)
            .filter((book) => `${this.props.books[book].name} ${this.props.books[book].author}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map(book => <UsedBookCard removeBook={this.props.removeBook} book={this.props.books[book]} key={book}/>
            )
          }
        </Card.Group>
      </Container>
    )
  }

}

export default BooksList
