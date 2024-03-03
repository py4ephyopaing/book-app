import React from 'react'
import BookItem from './BookItem'

export default function BookContainer({ books }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly mt-3 gap-x-3">
            {books.map((i, index) => <BookItem {...i} key={index} />)}
        </div>
    )
}
