import React from 'react'
import CategoryContainer from '../components/CategoryContainer'

export default function Category() {
    const categories = [
        {
            name: 'Fiction',
            image: '/cat-fiction.png'
        },
        {
            name: 'Non-Fiction',
            image: '/cat-nonfiction.png'
        },
        {
            name: 'Fantasy',
            image: '/cat-fantasy.png'
        },
        {
            name: 'Horror',
            image: '/cat-horror.png'
        },
        {
            name: 'Adult',
            image: '/cat-adult.png'
        },
        {
            name: 'Romance',
            image: '/cat-romance.png'
        },
        {
            name: 'Mystery',
            image: '/cat-mystery.png'
        },
        {
            name: "Action",
            image: '/cat-action.png'
        }
    ]
    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <h1 className='text-4xl font-medium font-nunito pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-10'>Category</h1>

            <CategoryContainer categories={categories} />
        </div>
    )
}
