import React from 'react'

function CategoryItem({ name, image }) {
  return (
    <div className="relative w-full h-[200px] bg-slate-800 rounded-xl group">
        <p className="py-4 pl-5 text-4xl text-white font-medium font-mukta">{name}</p>
        <img src={image} alt={name} className="group-hover:-translate-y-[30%] duration-200 absolute -translate-y-[40%] top-0 right-0 h-full" />
    </div>
  )
}

export default CategoryItem