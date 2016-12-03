import React, { PropTypes } from 'react';
import { Card, Image, Label } from 'semantic-ui-react'

export default function Book(props) {
  return (

          <Card raised href='#link'>
            <Image
              label={{ as: 'a', color: 'orange', content: props.category, icon: 'spoon', ribbon: true }}
              src={props.url}
            />
            <Card.Content>
              <Card.Header>
                {props.bookName}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  {props.date}
                </span>
              </Card.Meta>
              <Card.Description>
                {props.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label as='a' image>
                <img src={props.userPhoto} />
                {props.username}
              </Label>
            </Card.Content>
          </Card>

  );
}

// Book.propTypes = {
// };
