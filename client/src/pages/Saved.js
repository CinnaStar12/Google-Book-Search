import React, { useState, useEffect } from "react"
import { Col, Row, Container } from "../components/Grid"
import Book from "../components/Book"
import API from "../utils/API"

function Saved(){
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        API.getBooks()
        .then(res =>
            setBooks(res.data)
            )
            .catch(err => console.log)(err);
    }, []) 






    return(
        <Container>
            <Row>
                <Col size="lg-12">

                </Col>
            </Row>
        </Container>
    )
}