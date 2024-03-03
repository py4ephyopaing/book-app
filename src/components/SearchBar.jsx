import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ query, setQuery}) {
    return (
        <div className="relative mb-2">
            <FaSearch className="w-5 h-5 md:w-6 md:h-6 text-blue-500 dark:text-blue-950 absolute top-1/2 left-4 -translate-y-1/2" />
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="w-full h-14 md:h-16 rounded-lg text-lg pl-12 md:pl-16 pr-4 bg-gray-300 dark:bg-slate-400 placeholder:text-blue-500 dark:placeholder:text-blue-950 text-black dark:text-white shadow-sm md:shadow-none dark:md:shadow-lg focus:outline-none" placeholder="Search your favourite somethings" />
        </div>
    )
}
