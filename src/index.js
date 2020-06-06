import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest", pages: 250 },
    { "title": "White Teeth", "author": "Zadie", pages: 240 },
    { "title": "Cat's like us", "author": "Talat" }
]


render(<Library books={bookList} />,
    document.getElementById('root')
)