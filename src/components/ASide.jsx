import classNames from 'classnames'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ASide({ showAside, setShowAside }) {
  return (
    <aside className={classNames({
        "md:block md:translate-x-0 fixed top-0 right-0 h-screen w-[22rem] bg-slate-200 dark:bg-slate-900": true,
        "duration-500": true,
        "translate-x-full": !showAside,
        "z-50 translate-x-0": showAside
    })}>


        <div className="md:hidden absolute top-0 left-0 px-2 py-6 rounded-ee-3xl bg-gray-600/20" onClick={() => setShowAside(false)}>
            <FaArrowRight className=" text-white dark:text-white" />
        </div>

        <div className="px-3 py-3">


            <p className="text-black dark:text-white px-2 py-4 flex justify-between font-medium"><span className="text-2xl">Featured</span></p>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/achieve_cv (1).jpg" alt="wer" className="bg-red-200 dark:bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-black dark:text-white font-medium">Sar Oak</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 py-2">Maung Maung</p>
                    <p className="text-md text-gray-800 dark:text-gray-200">Rating 4.2</p>
                </div>
            </div>
            <div className="w-full flex gap-5 items-start mb-3">
                <img src="/achieve_cv (2).jpg" alt="wer" className="bg-red-200 dark:bg-red-600 w-[80px] h-[125px] object-cover rounded-xl" />
                <div>
                    <p className="text-xl text-black dark:text-white font-medium">Hee Hee</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 py-2">Alexandre</p>
                    <p className="text-md text-gray-800 dark:text-gray-200">Rating 3.9</p>
                </div>
            </div>
            <div className="w-full bg-blue-300 text-xl text-center my-2 h-36 rounded-lg">
            </div>
        </div>
    </aside>
  )
}
