import React from 'react'
import AuthorCard from '../components/AuthorCard'
import BookContainer from '../components/BookContainer'

export default function Author() {
    const books = [
		{
			img: '/bookcv.jpg',
			title: "Book One",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 3.2,
		},
		{
			img: '/bookcv2.jpg',
			title: "Why not Twoth?",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
        {
            img: '/bookcv.jpg',
			title: "Book One",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 3.2,
		},
        {
            img: '/bookcv.jpg',
            title: "Book One",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            rating: 3.2,
        },
		{
            img: '/bookcv2.jpg',
			title: "Why not Twoth?",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Why not Twoth?",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
        {
			img: '/bookcv.jpg',
			title: "Book One",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 3.2,
		},
	]

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <AuthorCard />

            <BookContainer books={books} />
        </div>
    )
}
