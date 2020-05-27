import React, { useState } from "react"
import { Col, Row, Container } from "../components/Grid"
import Book from "../components/Book"

function Search(){
    const [search, setSearch] = useState()
    const [results, setRestults] = useState([])

    const searchRef = useRef();

    function handleInputChange(event) {
        setSearch(searchRef.current.value);
        console.log(search)
    }


    return (
        <Container fluid>
            <Row>
                <Col size="lg-12">
                    <div>
                        <h4>Book Search</h4>
                        <form>
                            <div className="form-group">
                                <label for="bookSearch">Book</label>
                                <input type="text" className="form-control" id="bookSearch" ref="searchRef"></input>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12">
                    <Book title="Harry Potter"
                    author="J.K. Rowling"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ullamcorper nisi. Aenean nec lacus felis. Nam ac accumsan leo. Aliquam ut ante ultrices, tempus ante nec, venenatis urna. Duis vel dignissim nibh. Aliquam efficitur metus diam, id volutpat dui auctor nec. In hac habitasse platea dictumst. Pellentesque fringilla consequat congue. Donec finibus ante magna, ut mollis libero vulputate ac. Sed ac tempor odio, non posuere nulla. Phasellus eleifend nunc a orci tempor, a euismod nisl molestie. Nam ac tincidunt quam. Praesent quis risus nisl. Integer sagittis metus sed cursus varius. "
                    img="https://via.placeholder.com/150x200"/>
                </Col>
            </Row>
        </Container>
    )

}

export default Search