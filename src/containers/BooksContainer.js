import React, { Component } from 'react';
import Book from '../components/Book'
import { Card } from 'semantic-ui-react'

export default class BooksContainer extends Component {

  render() {
    const Info = {
      url : 'http://craigmod.com/images/journal/coccyx/aba-06.png',
      bookName : 'A song of fire and Ice',
      date : 'date',
      description : 'description',
      userPhoto : 'userPhoto',
      username : 'username',
      category : 'category'
    };
    return (
        <div>
          <Book
            url={Info.url}
            bookName={Info.bookName}
            date={Info.date}
            description={Info.description}
            userPhoto={Info.userPhoto}
            username={Info.username}
            category={Info.category}
          />
        </div>
    );
  }
}
// BooksContainer.propTypes = {
// };
