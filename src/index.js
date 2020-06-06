import React from 'react'
import { render } from 'react-dom'
let bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest", pages: 250 },
    { "title": "White Teeth", "author": "Zadie", pages: 240 },
    { "title": "Cat's like us", "author": "Talat", pages: 150 }
]
const Book = ({ title, author, pages, freeBookmark }) => {
    return (<section>
        <h2> {title} </h2>
        <p> by: {author} </p>
        <p> Pages: {pages} </p>
        <p> Free Bookmark Today : {freeBookmark ? 'yes' : 'no!'}</p>
    </section>)
}

const Hiring = () =>
    <dive>
        <p>The library is hiring. Go to www.library.com</p>
    </dive>
const NotHiring = () =>
<dive>
    <p>The library is not hiring. Check back later for more info</p>
</dive>

class Library extends React.Component {
    state = {
        open: false,
        freeBookmark: true,
        hiring:true
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                {this.state.hiring? <Hiring/>: <NotHiring/>}
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {
                    books.map((book, i) =>
                        <Book key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />)

                }

            </div>
        )
    }
}
render(<Library books={bookList} />,
    document.getElementById('root')
)