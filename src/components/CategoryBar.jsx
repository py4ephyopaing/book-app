import React from 'react'

function CategoryBar({ items }) {
	let active = `bg-indigo-950 text-white dark:bg-blue-200 dark:text-black`
	let inactive = `bg-blue-200 dark:bg-indigo-950 text-black dark:text-white`
	
	let handleCategoryClick = (e) => {
		if(e.target.getAttribute('active') == 'true') {
			e.target.className = e.target.className.replace(active, inactive)
			e.target.setAttribute('active', false)
		}
		else {
			e.target.className = e.target.className.replace(inactive, active)
			e.target.setAttribute('active', true)
		}
	}

	return (
		<div className="mt-4 mb-2 flex items-center gap-2 flex-wrap">
			<span className="text-md font-medium text-gray-900 dark:text-gray-100 py-1 pr-3">Category Filter: </span>
			{
				items.map(item => <span active={false} onClick={handleCategoryClick} className="bg-blue-200 dark:bg-indigo-950 text-black dark:text-white px-3 py-1 rounded-lg font-medium cursor-pointer">{item}</span> )
			}
		</div>
	)
}

export default CategoryBar