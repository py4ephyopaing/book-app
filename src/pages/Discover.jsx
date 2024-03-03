import React from 'react'

function Discover() {
    return (
        <div className="w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <SearchBar query={query} setQuery={setQuery} />            
        </div>
    )
}

export default Discover