import React from "react"
import "./style.css"
import API from "../../utils/API";
function Book(props) {
    function handleButtonClick(event){
        if (event.target.id === "save") {
            event.preventDefault();
            const savedBook = {
                title: props.title,
                authors: props.author,
                description: props.description,
                image: props.img,
                link: props.url
            }
            API.saveBook(savedBook)
            .then(() => {
                console.log("Book Saved")
            })
            .catch(err =>{ throw err })
        }
    }
    return (
        <div className="card mb-3 book">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <p className="h3">{props.title}</p>
                    <p className="h5">{props.author}</p>
                    <img src={props.img} className="card-img book-image" alt={props.title} />
                </div>
                <div className="col-md-8 mt-3 mb-3 description">
                    <p card="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary m-2">View</a>
                    <button className="btn btn-secondary" id="save" data-target={props.id} onClick={handleButtonClick}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Book