import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Input, Label, Button, Form } from 'semantic-ui-react'
import formatDate from '../helpers'
// import base from '../base'

// const storageRef = base.storage().ref()

class PostBookForm extends Component {
  constructor() {
    super()
    this.createBook = this.createBook.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      bookImageUrl : ""
    }
  }
  createBook(e) {
    e.preventDefault()
    console.log("createBook")
    const book = {
      name: this.name.value,
      author: this.author.value,
      edition: this.edition.value,
      publishedYear: this.publishedYear.value,
      category : this.category.value,
      price : this.price.value,
      description : this.description.value,
      bookImage : this.state.bookImageUrl,
      userImage : this.props.userImage,
      username : this.props.username,
      date : `${formatDate()}`
    }
    this.props.addBook(book)
    this.postBookForm.reset()
    this.props.close()
  }

  onDrop = (files) => {
    console.log('Received files:', files);
    // const image = (files.map(file => <img src={file.preview} />))
    console.log(files[0])

    const file = files[0]

    // var metadata = {
    //   'contentType': file.type
    // };
    // storageRef.child('images/' + file.name).put(file, metadata)
    // .then(function(snapshot) {
    //   console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    //   console.log(snapshot.metadata);
    //   var url = snapshot.metadata.downloadURLs[0];
    //   console.log('File available at', url);
    //   // [START_EXCLUDE]
    //   document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
    //   // [END_EXCLUDE]
    // }).catch(function(error) {
    //   // [START onfailure]
    //   console.error('Upload failed:', error);
    //   // [END onfailure]
    // });

    this.setState({
      bookImageUrl: file.preview
    })
  }

  render() {

    return (
      <div>
        <Dropzone className="FileUpload" onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>

        <Form className="PostBookForm" onSubmit={this.createBook}>
          <form ref={(input) => this.postBookForm = input}>
            <Form.Field>
              <label>Book Title</label>
              <input required type="text" name="name" ref={(input) => this.name = input} placeholder='A Game of Thrones' />
            </Form.Field>
            <Form.Field>
              <label>Author</label>
              <input required type="text" name="author" ref={(input) => this.author = input} placeholder='George R. R. Martin' />
            </Form.Field>
            <Form.Field>
              <label>Edition</label>
              <input type="text" name="edition" ref={(input) => this.edition = input} placeholder='First, Second, Third...' />
            </Form.Field>
            <Form.Field>
              <label>Published Year</label>
              <input type="text" name="publishedYear" ref={(input) => this.publishedYear = input} placeholder='1996' />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <input required type="text" name="category" ref={(input) => this.category = input} placeholder='Technology, Science, History...' />
            </Form.Field>
            <Input labelPosition='right' type='text' placeholder='Amount'>
              <Label basic>$</Label>
              <input required type="text" name="price" ref={(input) => this.price = input}/>
              <Label>.00</Label>
            </Input>
            <Form.Field>
              <label>Description</label>
              <textarea name="description" rows='3' ref={(input) => this.description = input} placeholder='The description goes here'/>
            </Form.Field>
            <Button fluid color='green' type='submit'>Submit</Button>
          </form>

        </Form>

      </div>

    )
  }
}

export default PostBookForm
