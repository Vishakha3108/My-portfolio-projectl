import React from 'react'

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12 '>
        <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20'>
                 <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaGithubSquare size={24}/>
                        <FaLinkedin size={24}/>

                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                        <p>
                        Designed With ❤ By Vishakha Bhojak
                        </p>
                    </div>
                 </div>
        </div>
    </footer>
    </>
  )
  
}

export default Footer;
