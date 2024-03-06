import React from 'react'
import { FaArchive } from 'react-icons/fa'
import AuthorCard from '../components/AuthorCard'
import { toast } from 'react-toastify'

function Book() {
    const book = {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        image: "/lotr.jpg",
        author: {
            name: "J.R.R. Tolkien",
            image: "/tolkien.jpg",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eos libero. Iusto temporibus voluptates veniam, explicabo exercitationem quam deleniti voluptatum a beatae nisi culpa eius debitis ab voluptatibus non nostrum.",
        },
        description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them\nIn ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.\nFrom Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.",
        publisher: "Free Htote",
        publish_date: new Date().getFullYear(),
        pages: 640,
        width: "10.16",
        height: "17.78",
        language: "English",
        book_type: "hard cover",
        price: 39.99,
        currency: "USD",
        translates: [
            {
                language: "Myanmar",
                name: "ကျေးဇူးအများကြီးတင်ပါတယ်"
            },
            {
                language: "German",
                name: "Vielen Dank"
            }
        ],
        category: [
            "Fantasy",
            "Classic",
            "Fiction",
            "Adventure"
        ],
        tags: [
            "Tolkien",
            "J.R.R. Tolkien",
            "Classic",
            "LOTR",
            "Legends",
        ]
    }

    const handleClick = () => {
        toast.info("Backend is not built yet")
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-2 md:px-6 lg:px-16 py-2 lg:py-4">
            <div className="flex items-start px-4 py-2 gap-x-4 lg:gap-x-6">
                <img src={book.image} alt={book.title} className='w-[125px] lg:w-[150px] bg-black/5 rounded-xl mx-auto lg:mx-0' />
                <div className='lg:py-2'>
                    <p className="text-2xl lg:text-[2rem] leading-[2.2rem] lg:leading-[2.6rem] font-bold font-nunito text-left dark:text-white">{book.title}</p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 py-2 font-medium font-mukta">
                        {book.author.name}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{book.publish_date}
                    </p>
                    <div className="text-base">
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Price :</span><span className='font-medium dark:text-gray-50'>{book.price} {book.currency}</span></p>
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Publisher :</span><span className='font-medium dark:text-gray-50'>{book.publisher}</span></p>
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Publish date :</span><span className='font-medium dark:text-gray-50'>{book.publish_date}</span></p>
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Type :</span><span className='font-medium dark:text-gray-50'>{book.book_type}</span></p>
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Language :</span><span className='font-medium dark:text-gray-50'>{book.language}</span></p>
                        <p className='mb-2'><span className="pr-2 font-medium text-gray-700 dark:text-gray-300">Translates are available in :</span><span className='font-medium'>{book.translates.map(i => <a href={`/book/${i.name}`} className='pr-2 dark:text-green-300 text-green-700 hover:text-blue-700 dark:hover:text-blue-300'>{i.language}</a>)}</span></p>
                    </div>

                    <div className="relative flex mt-4">
                        <button className="peer-hover:hidden block w-32 py-2 bg-yellow-400 font-medium text-black hover:bg-yellow-500 font-josefin" onClick={handleClick}>Order</button>
                        <button className="peer px-4 py-2 bg-orange-400 font-medium text-black hover:bg-orange-500 font-josefin" onClick={handleClick}><FaArchive /></button>
                        <button className="peer-hover:block hidden absolute -top-4 left-36 -translate-y-1/2 px-4 py-1 text-sm bg-gray-400 font-medium text-black rounded-[15px] font-josefin" onClick={handleClick}>Save</button>
                    </div>
                </div>
            </div>

            <p className="my-3 md:mt-4 lg:mt-8 text-lg border-y-2 border-gray-300 dark:border-gray-500 py-4 md:py-6 lg:py-8 px-2 text-center leading-8 text-gray-700 dark:text-gray-300">
                {book.description}
            </p>

            <div className="text-black dark:text-white mb-4">
                Categorize in {
                    book.category.map(i => <span className='text-black dark:text-white font-medium pb-0.5 border-black border-b-2 mr-2'>{i}</span>)
                }
            </div>
            <div className="text-black dark:text-white">
                Tags: {
                    book.tags.map(i => <span className='text-black dark:text-white font-medium pb-0.5 border-black border-b-2 mr-2'>{i}</span>)
                }
            </div>

            <AuthorCard />
        </div>
    )
}

export default Book