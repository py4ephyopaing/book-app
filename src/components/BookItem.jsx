import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

export default function BookItem({img, title, description, rating}) {
    const calculateStars = (rating) => {
        return <FaStar className='text-yellow-400' /> ** rating.toFixed()
    }

    return (
        <div className="rounded-xl w-full h-auto px-5 md:px-10 py-2 flex items-start gap-2">
            <img src={img} alt={title} className="w-[100px] h-[150px] object-cover rounded-md" />
            <div className="">
                <p className="text-2xl py-2 font-medium text-black dark:text-white font-mukta">{title}</p>
                <p className="text-md text-gray-600 dark:text-gray-400 font-josefins">{description}</p>
                <div className="flex gap-x-2 mt-2">
                    {calculateStars(rating)}
                    <span className="text-gray-700 dark:text-gray-300 -mt-1 pl-3">({rating})</span>
                </div>
            </div>
        </div>
    )
}
