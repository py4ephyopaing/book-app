import React from 'react'

function CategoryItem({ name, image }) {
  return (
    <a href={`/category/${name}`} className="relative w-full h-[200px] bg-slate-200 dark:bg-slate-700 rounded-xl group cursor-pointer transition-all duration-200 hover:scale-95 hover:bg-slate-300 dark:hover:bg-slate-900 hover:border-x-4 dark:border-white border-black hover:px-4">
        <p className="py-4 pl-5 text-4xl group-hover:text-blue-900 text-black dark:group-hover:text-blue-100 dark:text-white font-medium font-mukta">{name}</p>
        <img src={image} alt={name} className="group-hover:-translate-y-[70%] duration-200 absolute top-1/2 -translate-y-1/2 right-3 h-[90%]" />
    </a>
  )
}

export default CategoryItem