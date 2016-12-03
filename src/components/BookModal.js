import React from 'react'
import { Image, Modal, Label } from 'semantic-ui-react'
import ContactForm from './ContactForm'

const BookModal = (props) => {
    const { name, date, description, bookImage, userImage, username, price } = props.bookInfo

    return (
      <div>

        <Modal className='ContactFormModal' dimmer={props.dimmer} open={props.open} onClose={props.close}>
          <Modal.Header>{name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='large' src={bookImage}
            />
            <Modal.Description>
              <p>{description}</p>
              <h4>Publication Year: {date}</h4>
              <div className='ModalLabel'>
                <Label size='huge' as='a' image>
                  <img src={userImage} alt={username}/>
                  {username}
                </Label>
                <h2>{`${price}$`}</h2>
              </div>

              <ContactForm close={props.close}/>

            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }

export default BookModal
