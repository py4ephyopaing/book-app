import React from 'react'
import CategoryItem from './CategoryItem'

function CategoryContainer({ categories }) {
    return (
        <div className="grid md:grid-cols-2 gap-y-2 gap-x-3">
            {categories.map((i, index) => <CategoryItem {...i} key={index} />)}
        </div>
    )
}

export default CategoryContainer