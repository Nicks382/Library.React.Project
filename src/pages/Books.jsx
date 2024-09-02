import React from "react";
import { useState } from "react";
import Book from "../components/ui/Book";
const Books = ( {books: initialBooks} ) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        console.log(filter);

        if(filter === "lowtohigh") {
            setBooks(
                books
                .slice()
                .sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            );
        }

        if(filter === "hightolow") {
            setBooks(
                books
                .slice()
                .sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
            );
        }

        if(filter === "rating") {
            setBooks(
                books
                .slice()
                .sort((a, b) => (b.rating) - (a.rating))
            );
        }
    }

    return(
        <div id = "books__body">
            <div className="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">
                                    All <span className="purple">Books</span>
                                </h2>
                                <select id="filter" defaultValue={"DEFAULT"} onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" selected disabled>Sort By</option>
                                    <option value="lowtohigh">Price: Low to High</option> 
                                    <option value="hightolow">Price: High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {
                                    books.map((book) => (
                                        <Book book={book} key={book.id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

};


export default Books;