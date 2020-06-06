import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'
 class Library extends React.Component {
    static defaultProps = {
        books: [{ "title": "Taheo Tales", "author": "Taheo Author", pages: 1001 }]
    }
    state = {
        open: false,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
        console.log("The component is now mounted!")
    }
    componentDidUpdate() {
        console.log("The component is now updated!")
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
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                {this.state.loading ? "Loading"
                    : <div>
                        {this.state.data.map(product => {
                            return (<div key={product.id}>
                                <h3>Library product of the week</h3>
                                <h4>{product.name}</h4>
                                <img title={product.name} src={product.image} height={100} />                                <h4>{product.price}</h4>
                            </div>)
                        })}
                    </div>}
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
Library.propTypes = {
    books: PropTypes.array
}
Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}


export default Library