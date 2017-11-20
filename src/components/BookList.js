import React, { Component } from "react";
import BookItem from "./BookItem";

class BookList extends Component {
  render() {
    const bookItems = this.props.books.map((book, index) => {
      return (
        <BookItem key={index} book={book} onSelect={this.props.onSelect} />
      );
    });
    return <div>{bookItems}</div>;
  }
}

export default BookList;
