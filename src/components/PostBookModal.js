import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
// import FileUpload from './FileUpload'
import PostBookForm from './PostBookForm'

class PostBookModal extends Component {

  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        {this.props.uid ?
            <Button onClick={this.show('blurring')}>
              <Icon name='book' />
              Post a Book
            </Button>
            : null
        }

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Post your book</Modal.Header>
          <Modal.Content className="PostBookModalContainer" image>
            <Modal.Description>
              <PostBookForm addBook={this.props.addBook}
                            close={this.close}
                            userImage={this.props.userImage}
                            username={this.props.username}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default PostBookModal
