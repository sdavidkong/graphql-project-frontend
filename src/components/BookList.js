import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  //
  console.log(this.props);
  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};
