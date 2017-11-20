export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  };
}

export function selectBook(book) {
  return {
    type: "SELECT_BOOK",
    payload: book
  };
}

export function newAction(actionType, book) {
  return {
    type: actionType,
    payload: book
  };
}
