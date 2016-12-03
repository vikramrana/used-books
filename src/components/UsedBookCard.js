import React, { Component } from 'react'
import BookModal from './BookModal'
import { Card, Image, Label } from 'semantic-ui-react'

class UsedBookCard extends Component {
  constructor() {
    super()
    this.state = { open: false, dimmer: null }
    this.handleClick = this.handleClick.bind(this)
    this.close = this.close.bind(this)
  }

  handleClick(){
    this.setState({
      open: true,
      dimmer: 'blurring'
    })
  }

  close(){
    this.setState({open: false})
  }
  render() {
    const { book } = this.props
    return(
      <Card raised href='#link' onClick={this.handleClick}>
        <Image alt={book.name}
          label={{ as: 'a', color: 'orange', content: `${book.category}`, icon: 'bookmark', ribbon: true }}
          src={book.bookImage}
        />
        <Card.Content>
          <Card.Header>
            {`${book.name} ( by ${book.author} )`  }
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {book.date}
            </span>
          </Card.Meta>
          <Card.Description>
            {book.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label as='a' image>
            <img src={book.userImage} role="presentation"/>
            {book.username}
          </Label>
        </Card.Content>
        {/* <Button onClick={this.props.removeBook} icon>
          <Icon name='remove circle' />
        </Button> */}

        <BookModal bookInfo={book} dimmer={this.state.dimmer} open={this.state.open} close={this.close}/>

      </Card>
    )
  }

}

export default UsedBookCard
