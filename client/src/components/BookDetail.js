import React from "react";
import { graphql } from "react-apollo";

import { getBookQuery } from "../queries/queries";

export default graphql(getBookQuery, {
  options: props => ({ variables: { id: props.bookId } })
})(({ data: { book } }, ...props) => (
  <div>
    {book && (
      <div>
        <h2>{book && book.name}</h2>
        <p>{book.genre}</p>
        <div>
          <h3>{book.author.name}</h3>
          <span>All books by this Author</span>
          <ul>{book.author.books.map(b => <li key={b.id}>{b.name}</li>)}</ul>
        </div>
      </div>
    )}
  </div>
));
