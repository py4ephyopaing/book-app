import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import BookContainer from '../components/BookContainer'

function CategoryDetail() {
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
    }, [authorQuery])

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <div className='mb-4 flex bg-slate-200 dark:bg-slate-500 px-4 py-6 rounded-xl'>
                <div>
                    <p className="text-3xl pb-2 font-bold font-nunito">Fiction</p>
                    <p className="text-xl leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis veniam optio inventore totam dolor sapiente minus facilis eum et, explicabo esse eaque nisi delectus provident a, consequuntur magnam est?</p>
                </div>
                <img src="/cat-fiction.png" alt="Fiction" className='w-[200px] scale105' />
            </div>

            <SearchBar
                query={authorQuery}
                setQuery={setAuthorQuery}
                placeholder={"Filter with author"}
                results={AuthorResult}
            />

            <BookContainer books={books} />
        </div>
    )
}

export default CategoryDetail