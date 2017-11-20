import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookContainer from "./containers/BookContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    cart: []
  };
  addCart = book => {
    this.setState({
      cart: [...this.state.cart, book]
    });
  };
  render() {
    console.log(this.state.cart);
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route
          exact
          path="/"
          render={props => <Home {...props} books={this.state.cart} />}
        />
        <Route
          path="/books"
          render={props => (
            <BookContainer {...props} onAddCart={this.addCart} />
          )}
        />
      </div>
    );
  }
}

export default App;
