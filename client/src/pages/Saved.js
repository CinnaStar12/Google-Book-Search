import React, { useState, useEffect } from "react"
import { Col, Row, Container } from "../components/Grid"
import Book from "../components/Book"
import API from "../utils/API"

function Saved() {
    const [books, setBooks] = useState([]);


    //Get Books from Database
    // useEffect(() => {
    //     API.getSavedBooks()
    //         .then(res =>
    //             setBooks(res.map(book => {
    //                 return (
    //                     <li id={book.id}>
    //                         <Book title={book.volumeInfo.title}
    //                             author={book.volumeInfo.authors[0]}
    //                             img={book.volumeInfo.imageLinks.thumbnail}
    //                             description={book.volumeInfo.description}
    //                             url={book.volumeInfo.infoLink}
    //                             id={book.id} />
    //                     </li>
    //                 )
    //             }))
    //         )
    // }, [])




    //Render saved books onto page

    return (
        <Container>
            <Row>
            <a className="btn btn-primary m-5" href="/search">Search Books</a>
                <ul>
                    <Book title="Saved Book"
                    author="Book Saver"
                    description="A saved Book"
                    btnFunction="Delete"/>
                </ul>
            </Row>
        </Container>
    )
}

export default Saved