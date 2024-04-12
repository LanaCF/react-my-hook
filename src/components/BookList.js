import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="list-block">
      {
        books.map((book, index) => (
          <p className="list-book" key={ index }>
            { index + 1 }. { book.title } - { book.autor }
          </p>
        ))
      }
    </div>
  );
};

export default BookList;