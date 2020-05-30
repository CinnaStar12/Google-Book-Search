import React, { useState, useRef, useEffect } from "react"
import { Col, Row, Container } from "../components/Grid"
import Book from "../components/Book"
import API from "../utils/API"

function Search() {
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])
    const searchRef = useRef();


    useEffect(() => {
        API.getGoogleBooks("Harry Potter")
            .then(function (res) {
                setResults(res.data.items)
                renderResults()
            })
            .catch((err) => console.error(err))
    }, [search])

    function renderResults() {

        const renderedResults = (results.map(book => (
            <li>
                <Book title={book.volumeInfo.title}
                    author={book.volumeInfo.authors[0]}
                    img={book.volumeInfo.imageLinks.thumbnail}
                    description={book.volumeInfo.description} />
            </li>
        )))
        return renderedResults;
    }

    function handleButtonClick(event) {
        event.preventDefault();
        if (event.target.id === "bookSearchButton") {
            setSearch(searchRef.current.value);
            API.getGoogleBooks(search)
                .then(function (res) {
                    setResults(res.data.items);
                })
                .catch((err) => console.error(err))
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
                        {renderResults()}
                    </ul>
                </Col>
            </Row>
        </Container>
    )

}

export default Search