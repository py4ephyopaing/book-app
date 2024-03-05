import React from 'react'

function Alert({ hidden, text }) {
    return (
        <div className={`${hidden ? 'hide' : 'block'} bg-black text-gray-200 px-4 py-4 rounded-lg duration-500 font-bold fixed top-5 right-5`}>
            {text}
        </div>
    )
}

export default Alert