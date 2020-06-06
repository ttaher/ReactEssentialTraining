import React from 'react'
export const Book = ({ title = "No Title Provided", author = "No Author", pages = 0, freeBookmark = false }) => {
    return (<section>
        <h2> {title} </h2>
        <p> by: {author} </p>
        <p> Pages: {pages} page </p>
        <p> Free Bookmark Today : {freeBookmark ? 'yes' : 'no!'}</p>
    </section>)
}

