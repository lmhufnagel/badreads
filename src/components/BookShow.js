import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const BookShow = props => {
  const handleClick = () => {
    props.onAddCart(props.book);
  };
  return (
    <div>
      {props.book.title ? (
        <Card>
          <Card.Content>
            <Card.Header>{props.book.title}</Card.Header>
            <Card.Meta>
              <span className="date">{props.book.publishedDate}</span>
            </Card.Meta>
            <Card.Description>{props.book.description}</Card.Description>
          </Card.Content>
          <Card.Content extra onClick={handleClick}>
            <Icon name="cart" />
            Add to cart
          </Card.Content>
        </Card>
      ) : null}
    </div>
  );
};

export default BookShow;
