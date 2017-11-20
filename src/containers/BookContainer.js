import React, { Component } from "react";
import BookList from "../components/BookList";
import BookShow from "../components/BookShow";
import { Grid } from "semantic-ui-react";
import data from "../data";
class BookContainer extends Component {
  state = {
    books: data,
    selectedBook: {}
  };

  selectBook = book => {
    this.setState({
      selectedBook: book
    });
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <BookList books={this.state.books} onSelect={this.selectBook} />
          </Grid.Column>
          <Grid.Column width={9}>
            <BookShow
              book={this.state.selectedBook}
              onAddCart={this.props.onAddCart}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default BookContainer;
