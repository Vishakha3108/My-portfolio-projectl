import React from 'react'

const Button = () => {
  return (
    <div>
      <button className="animate-bounce ml-20 mt-10 items-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg shadow-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <a className='block text-white no-underline'>
            Download Resume
        </a>
      </button>
    </div>
  )
}

export default Button
