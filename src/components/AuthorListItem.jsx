import React from 'react'
import { FaHashtag, FaStar } from 'react-icons/fa'

export default function AuthorListItem({ rank, name, birth, dead, rating, published}) {
  return (
    <a href={`/authors/${name}`} className="px-2 dark:even:bg-slate-700 even:bg-gray-200 w-full flex items-center justify-around py-5">
        <div className="flex items-center">
          <FaHashtag className="w-6 h-6 text-blue-950 dark:text-blue-200" />
          <span className="text-xl lg:text-2xl font-bold text-blue-900 dark:text-blue-200">{rank}</span>
        </div>
        <div className="flex items-center w-52">
          <p className="text-xl lg:text-2xl text-black dark:text-white hover:text-blue-950 dark:hover:text-blue-200 cursor-pointer font-bold pl-4 pb-2">{name}</p>
        </div>
        <div className="flex items-center w-56 md:w-96 justify-between">
          <p className="text-sm text-gray-700 dark:text-gray-300 font-nunito pl-4 w-32">{birth} <span className="text-black dark:text-white">-</span> {dead ? dead : 'current'}</p>
          <p className="max-w-32 text-gray-700 dark:text-gray-300 font-nunito pl-4 flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
          </p>
          <p className="hidden md:block text-md text-gray-600 dark:text-gray-200 px-4">{published} published</p>
        </div>
    </a>
  )
}