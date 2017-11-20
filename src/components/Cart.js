import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

class Cart extends Component {
  render() {
    const bookItems = this.props.books.map((book, index) => {
      return (
        <Feed.Event key={index}>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>You</Feed.User> added {book.title} to your cart
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      );
    });
    return <Feed>{bookItems}</Feed>;
  }
}

export default Cart;
