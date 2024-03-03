import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CategoryBar from '../components/CategoryBar';
import BookContainer from '../components/BookContainer';

function Discover() {
    const [ AuthorResult, setAuthorResult ] = useState([
        'John Smith',
        'Mary Johnson',
        'Robert Williams',
        'Jennifer Brown',
        'Michael Davis',
        'Sarah Miller',
        'David Wilson',
        'Jessica Moore',
        'Christopher Anderson',
        'Ashley Thomas'
    ])

    const books = [
		{
			img: '/bookcv.jpg',
			title: "Book One",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 3.2,
		},
		{
			img: '/bookcv2.jpg',
			title: "ME",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "I hate fonts",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "gunsNroses",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Stop Vaping, more cigarettes",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Beer is better than soju",
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
			img: '/bookcv2.jpg',
			title: "I hate Java",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Why not me?",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "if it is too hard for you, don't try!",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Typescript is bullshit!",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "C++ is high for my brain",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Javascript",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		},
		{
			img: '/bookcv2.jpg',
			title: "Four + th",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			rating: 4.9,
		}
	]

    const [ bookResult, setBookResult ] = useState(books)
    const [ searchQuery, setSearchQuery ] = useState('')
    const [ authorQuery, setAuthorQuery ] = useState('')


    useEffect(() => {
        if (authorQuery.length > 0) {
            let authors = AuthorResult.filter(item => item.toLowerCase().indexOf(authorQuery.toLowerCase()) !== -1)
            setAuthorResult(authors)
        } else {
            setAuthorResult([
                'John Smith',
                'Mary Johnson',
                'Robert Williams',
                'Jennifer Brown',
                'Michael Davis',
                'Sarah Miller',
                'David Wilson',
                'Jessica Moore',
                'Christopher Anderson',
                'Ashley Thomas'
            ])
        }
        if (searchQuery.length > 0) {
            let bookResult = books.filter(item => item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
            setBookResult(bookResult)
        } else {
            setBookResult(books)
        }
    }, [authorQuery, searchQuery])

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
            <SearchBar
                query={authorQuery}
                setQuery={setAuthorQuery}
                placeholder={"Search for authors"}
                results={AuthorResult}
            />

            <CategoryBar
                items={[
                    'All',
                    'Fiction',
                    'Non-Fiction',
                    'Biography',
                    'History',
                    'Horror',
                    'Romance',
                    'Mystery',
                    'Adventure',
                    'Science Fiction',
                    'Poetry',
                    'Self-Help',
                    'Humor',
                    'Cookbooks',
                    'Business',
                    'Art',
                    'Travel',
                    'Self-Improvement',
                ]}
            />

            <hr className="block md:hidden my-4" />

            <BookContainer books={bookResult} />

        </div>
    )
}

export default Discover