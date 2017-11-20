import React, { Component } from "react";
import BookList from "../components/BookList";
import BookShow from "../components/BookShow";
import { Grid } from "semantic-ui-react";
import data from "../data";
import { connect } from "react-redux";
import { addToCart, selectBook } from "../actions/books";
class BookContainer extends Component {
  render() {
    console.log("BookContainer", this.props);
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <BookList books={this.props.books} onSelect={this.props.onSelect} />
          </Grid.Column>
          <Grid.Column width={9}>
            <BookShow
              book={this.props.selectedBook}
              onAddCart={this.props.onAddCart}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.books,
    selectedBook: state.selectedBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: book => {
      dispatch(selectBook(book));
    },
    onAdd: book => {
      dispatch(addToCart(book));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
