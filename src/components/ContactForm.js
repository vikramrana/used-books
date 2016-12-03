import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const ContactForm = (props) => (
  <Form className="ContactForm" onSubmit={props.close}>
      <form method="POST" action="https://formspree.io/ranavikramart@gmail.com" >
        <Form.Field>
        <label>Full Name</label>
        <input name='name' placeholder='Jon Snow' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input name='_replyto' placeholder='jonsnow@thewall.com' />
      </Form.Field>
      <Form.TextArea name='details' label='Details' placeholder='Leave a message for the seller!' rows='3' />
      <Button fluid color='green' type='submit'>Submit</Button>
      <input type="hidden" name="_next" value="https://ns-zmncirxons.now.sh/" />
      </form>
  </Form>
)

export default ContactForm
