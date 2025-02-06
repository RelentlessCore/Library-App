<<<<<<< HEAD
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

export default function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find((book) => +book.id === +id);
  }
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import Book from '../components/ui/Book';

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);
>>>>>>> b2fe4f8ffcb127cdab3bb4728914834571d6718d

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
<<<<<<< HEAD
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis vitae voluptates modi dicta necessitatibus optio
                    dignissimos, earum eos ad repellendus delectus porro
                    provident, quibusdam ab nobis sed accusamus ipsum
                    cupiditate?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis vitae voluptates modi dicta necessitatibus optio
                    dignissimos, earum eos ad repellendus delectus porro
                    provident, quibusdam ab nobis sed accusamus ipsum
                    cupiditate?
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <Link to="/cart" className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
=======
                <h2 className='book__selected--title--top'>Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className='book__selected--figure'>
                <img
                  src={book.url}
                  alt=""
                  className='book__selected-img' />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">
                    Summary
                  </h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro eum quod obcaecati architecto nisi distinctio inventore, nesciunt consequuntur accusantium itaque unde at modi nihil labore laborum officiis dolorum illum.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro eum quod obcaecati architecto nisi distinctio inventore, nesciunt consequuntur accusantium itaque unde at modi nihil labore laborum officiis dolorum illum.
                  </p>
                </div>
                <button className="btn" onClick={() => addToCart(book)}>
                  Add to cart
                </button>
>>>>>>> b2fe4f8ffcb127cdab3bb4728914834571d6718d
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
<<<<<<< HEAD
              <h2 className="book__selected--title--top">Recommended Books</h2>
=======
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
>>>>>>> b2fe4f8ffcb127cdab3bb4728914834571d6718d
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
<<<<<<< HEAD
                .map((book) => <Book book={book} key={book.id} />)
                .splice(0, 4)}
=======
                .slice(0, 4)
                .map(book => <Book book={book} key={book.id} />)
              }
>>>>>>> b2fe4f8ffcb127cdab3bb4728914834571d6718d
            </div>
          </div>
        </div>
      </main>
    </div>
  );
<<<<<<< HEAD
} 
=======
};

export default BookInfo;
>>>>>>> b2fe4f8ffcb127cdab3bb4728914834571d6718d
