import React, { useState, useRef, useEffect } from "react"
import { Col, Row, Container } from "../components/Grid"
import Book from "../components/Book"
import API from "../utils/API"

function Search() {
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])
    const searchRef = useRef();


    useEffect(() => {
        API.getGoogleBooks(search)
            .then(function (res) {
                const searchReturn = res.data.items
                setResults(searchReturn.map(book => {
                    return (
                        <li id={book.id}>
                            <Book title={book.volumeInfo.title}
                                author={book.volumeInfo.authors[0]}
                                img={book.volumeInfo.imageLinks.thumbnail}
                                description={book.volumeInfo.description}
                                url={book.volumeInfo.infoLink}
                                id={book.id} />
                        </li>
                    )
                }))

            })
            .catch((err) => console.error(err))
    }, [search])


    function handleButtonClick(event) {
        event.preventDefault();
        if (event.target.id === "bookSearchButton") {
            setSearch(searchRef.current.value);
            // API.getGoogleBooks(search)
            //     .then(function (res) {
            //         setResults(res.data.items);
            //     })
            //     .catch((err) => console.error(err))
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col size="lg-12">
                    <div>
                        <h4>Book Search</h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="bookSearch" ref={searchRef} placeholder="Harry Potter...." />
                                <button type="submit" id="bookSearchButton" className="btn btn-success" onClick={handleButtonClick}>Search</button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12">
                    <ul>
                        {results}
                    </ul>
                </Col>
            </Row>
        </Container>
    )

}

export default Search