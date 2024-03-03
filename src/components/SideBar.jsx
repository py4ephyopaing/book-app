import React from 'react'
import { FaBars, FaCat, FaCogs, FaHome, FaSearch } from 'react-icons/fa'


export default function SideBar({ showAside, setShowAside }) {
  return (
    <nav className="fixed bottom-4 lg:top-0 left-0 rounded-3xl lg:rounded-none lg:block lg:h-screen mt-2 lg:m-0 mx-[2.5%] md:mx-2 w-[95%] md:w-[calc(100%-23rem)] lg:w-[17rem] bg-indigo-200 bg-opacity-70 dark:bg-[rgba(15,23,42,0.7)] dark:hover:bg-slate-900 lg:bg-slate-200 dark:lg:bg-slate-900 shadow-xl z-10">
        <p className="hidden lg:block text-3xl py-16 px-3 text-black dark:text-white font-medium">Book</p>

        <div className="lg:mr-0 lg:pl-4 lg:py-0 flex justify-evenly py-1 lg:block">
            <a href="" className="bg-gray-300 dark:bg-slate-600 text-teal-800 dark:text-teal-400 leading-9 font-medium lg:rounded-l-3xl block p-3 px-5 text-md lg:pl-8 lg:mb-5 rounded-3xl lg:rounded-none">
                <FaHome className="inline-block w-6 h-6" /> <span className="px-5 hidden lg:inline">Home</span>
            </a>
            <a href={`/discover`} className="text-teal-800 dark:text-teal-400 leading-9 font-medium lg:rounded-l-3xl block p-3 px-5 text-lg lg:pl-8 lg:mb-5 rounded-3xl lg:rounded-none">
                <FaSearch className="inline-block w-6 h-6" /> <span className="px-5 hidden lg:inline">Discover</span>
            </a>
            <a href="" className="text-teal-800 dark:text-teal-400 leading-9 font-medium lg:rounded-l-3xl block p-3 px-5 text-md lg:pl-8 lg:mb-5 rounded-3xl lg:rounded-none">
                <FaCat className="inline-block w-6 h-6" /> <span className="px-5 hidden lg:inline">Category</span>
            </a>
            <a href="" className="text-teal-800 dark:text-teal-400 leading-9 font-medium lg:rounded-l-3xl block p-3 px-5 text-md lg:pl-8 lg:mb-5 rounded-3xl lg:rounded-none">
                <FaCogs className="inline-block w-6 h-6" /> <span className="px-5 hidden lg:inline">Settings</span>
            </a>
            <button onClick={() => setShowAside(true)} className="md:hidden text-teal-800 dark:text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                <FaBars className="inline-block w-6 h-6" />
            </button>
        </div>

    </nav>
  )
}
