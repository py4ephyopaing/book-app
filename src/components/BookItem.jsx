import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

export default function BookItem({img, title, description, rating}) {
    return (
        <a href={`/book/${title}`} className="rounded-xl w-full overflow-hidden h-[160px] mb-2 px-5 md:px-10 py-2 flex items-start gap-2 group">
            <img src={img} alt={title} className="duration-200 w-[100px] h-[150px] object-cover rounded-md" />
            <div className="">
                <p className="text-2xl duration-200 group-hover:text-3xl group-hover:text-blue-600 py-2 font-medium text-black dark:text-white font-mukta">{title}</p>
                <p className="text-md text-gray-600 dark:text-gray-400 font-josefins">{description}</p>
                <div className="flex gap-x-2 mt-2">
                    {
                        Array.apply(null, { length: rating.toFixed() }).map((e, i) => (
                            <FaStar className='text-yellow-400' />
                        ))                          
                    }
                    <span className="text-gray-700 dark:text-gray-300 -mt-1 pl-3">({rating})</span>
                </div>
            </div>
        </a>
    )
}
