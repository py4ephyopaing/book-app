import classNames from 'classnames'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ASide({ showAside, setShowAside }) {
  return (
    <aside className={classNames({
        "md:block md:translate-x-0 fixed top-0 right-0 h-screen w-[22rem] bg-slate-200 dark:bg-slate-900": true,
        "duration-500": true,
        "translate-x-full": !showAside,
        "z-10 translate-x-0": showAside
    })}>


        <div className="md:hidden absolute top-0 left-0 px-2 py-6 rounded-ee-3xl bg-gray-600" onClick={() => setShowAside(false)}>
            <FaArrowRight className=" text-white dark:text-white" />
        </div>

        <div className="px-3 py-3">
            <div className='bg-slate-100 shadow-sm dark:shadow-none dark:bg-slate-700 rounded-xl w-full py-3 px-2'>
                <p className="text-2xl text-black dark:text-white py-4 px-2 font-medium">Detail</p>
                <div className="grid grid-cols-2 grid-rows-2 p-2 gap-y-4">
                    <div>
                        <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">Pin</p>
                        <p className="text-md text-gray-700 dark:text-gray-100 font-medium">20</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">Published</p>
                        <p className="text-md text-gray-700 dark:text-gray-100 font-medium">622</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">Vote</p>
                        <p className="text-md text-gray-700 dark:text-gray-100 font-medium">1.3M</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">Subcribers</p>
                        <p className="text-md text-gray-700 dark:text-gray-100 font-medium">1055</p>
                    </div>
                </div>
            </div>

            <p className="text-black dark:text-white px-2 py-4 flex justify-between font-medium"><span className="text-2xl">Achieves</span> <span className="hover:text-blue-400 my-2"><FaArrowRight className="w-4 h-4" /></span></p>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/achieve_cv (1).jpg" alt="wer" className="bg-red-200 dark:bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-black dark:text-white font-medium">Achieve One</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 py-2">23 Books</p>
                    <p className="text-md text-gray-800 dark:text-gray-200">Rating 4.2</p>
                </div>
            </div>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/achieve_cv (2).jpg" alt="wer" className="bg-red-200 dark:bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-black dark:text-white font-medium">Achieve One</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 py-2">23 Books</p>
                    <p className="text-md text-gray-800 dark:text-gray-200">Rating 4.2</p>
                </div>
            </div>
            <div className="w-full bg-blue-300 text-xl text-center my-2 h-36 rounded-lg">
            </div>
        </div>
    </aside>
  )
}
