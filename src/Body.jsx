import React from 'react';


const Body = () => {
    const bookList = ["To Read"]
    const bookName = ["The Women", "Dune", "Inception"];
    const bookAuthor = ["Kristin Hannah", "Frank Herbert", "Christopher Nolan"]
    const bookGenre = ["Drama", "Fantasy", "Science fiction"]

    return (
        <div>
            <h1>My {bookList} list</h1>
            <p>Read ASAP {bookName.join(", ")}</p>
            <p>Favorite authors {bookAuthor.join(", ")}</p>
            <p>Genres {bookGenre.join(", ")}</p>
        </div>
    );
};

export default Body;
