import React, { useState } from 'react'
import { FaArrowCircleRight, FaStar, FaStarHalf } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import Notice from '../components/Notice';
import BookContainer from '../components/BookContainer';
import AuthorListItem from '../components/AuthorListItem';

export default function Home() {
    let [ query, setQuery ] = useState('');

    const authors = [
        {
          img: "/author1.jpg",
          rank: 1,
          name: "J.K. Rowling",
          birth: "1965",
          dead: null,
          published: 62
        },
        {
          img: "/author2.jpg", 
          rank: 2,
          name: "Stephen King",
          birth: "1947",
          dead: null,
          published: 54
        },
        {
          img: "/author3.jpg",
          rank: 3,
          name: "Nora Roberts",
          birth: "1950",
          dead: null,
          published: 215
        },
        {
          img: "/author4.jpg",
          rank: 4,
          name: "Dean Koontz",
          birth: "1945",
          dead: null,
          published: 105
        },
        {
          img: "/author5.jpg",
          rank: 5,
          name: "Danielle Steel",
          birth: "1947",
          dead: null,
          published: 179
        },
        {
          img: "/author6.jpg",
          rank: 6,
          name: "Dr. Seuss",
          birth: "1904",
          dead: "1991",
          published: 44
        },
        {
          img: "/author7.jpg",
          rank: 7,
          name: "Enid Blyton",
          birth: "1897",
          dead: "1968",
          published: 600
        },
        {
          img: "/author8.jpg",
          rank: 8,
          name: "Jeffrey Archer",
          birth: "1940",
          dead: null,
          published: 37
        },
        {
          img: "/author9.jpg", 
          rank: 9,
          name: "Paulo Coelho",
          birth: "1947",
          dead: null,
          published: 39
        },
        {
          img: "/author10.jpg",
          rank: 10,
          name: "Barbara Cartland",
          birth: "1901",
          dead: "2000",
          published: 723
        }
    ]

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
		}
	]
      
    return (
        <div className="w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <SearchBar query={query} setQuery={setQuery} />

            <Notice />

            <hr className="block md:hidden my-4" />

            <h3 className="text-3xl text-black dark:text-white font-bold font-nunito flex justify-between items-center">
              Top Books <span className="hover:text-blue-950 hover:scale-90 duration-100"><FaArrowCircleRight /></span>
            </h3>

            <BookContainer books={books} />

            <h3 className="text-3xl text-black dark:text-white font-bold font-nunito flex justify-between items-center mt-7">
      				Top Authors <span className="hover:text-blue-950 hover:scale-90 duration-100"><FaArrowCircleRight /></span>
			      </h3>

            {
              authors.map((i, index) => <AuthorListItem {...i} key={index} />)
            }

        </div>
    )
}
