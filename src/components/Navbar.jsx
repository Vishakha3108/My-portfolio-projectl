import React from 'react'
import pic from "../../public/IMG_20221227_152428_051.jpg"

const Navbar = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md' >
        <div className='flex justify-between items-center h-16'>
            <div className=' flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className=' font-semibold text-xl cursor-pointer'>vishakh <span className='text-green-500 text-2xl'>a</span>
                <p className=' text-sm'>web devloper</p></h1>
            </div>
            <div>
            <ul className='flex space-x-8'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contect</li>
            </ul>
        </div> 
            </div>
        
     </div>
  )
}

export default Navbar;
