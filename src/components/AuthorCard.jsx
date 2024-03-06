import React from 'react'
import { FaBook, FaStar, FaWifi } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AuthorCard() {
  const handleFollow = () => {
    toast.error("Backend is not built yet.")
  }

  return (
    <div className='w-full px-4 lg:px-10 py-10 shadow-md md:flex gap-x-4'>
        <img src="/tolkien.jpg" alt="Tolkien" className='w-[150px] h-[150px] mx-auto mb-4 md:mb-0 lg:w-[180px] lg:h-[180px] object-cover rounded-md' />
        <div className='text-center md:text-left'>
            <p className="text-2xl font-medium font-mukta dark:text-white flex gap-x-4 items-center justify-center md:justify-normal">Christopher Tolkien <FaWifi onClick={handleFollow} title='Follow' className='-rotate-45 active:scale-125 hover:text-fuchsia-600' /></p>

            <p className="text-base md:text-lg font-nunito font-thin pt-3 dark:text-gray-100">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquid sapiente eaque nulla officia dolorum rem praesentium cumque deleniti totam debitis.
            </p>

            <p className='justify-center md:justify-normal flex gap-x-3 pt-2'>
                <span className="dark:text-gray-200 text-gray-800 flex items-center gap-x-2"><FaWifi className='-rotate-45' /> Followers &middot; 13M</span> &nbsp;&nbsp;
                <span className="dark:text-gray-200 text-gray-800 flex items-center gap-x-2"><FaStar /> Rating &middot; 4.2</span>
            </p>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AuthorCard