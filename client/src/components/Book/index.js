import React from "react"
import "./style.css"
function Book(props) {


    return (
        <div className="card mb-3 book">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <p className="h3">{props.title}</p>
                    <p className="h5">{props.author}</p>
                    <img src={props.img} className="card-img book-image" alt={props.title} />
                </div>
                <div className="col-md-8 mt-3 mb-3">
                    <p card="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Book