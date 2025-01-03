import React from 'react'
import pic from "../../public/IMG_20221227_152428_051.jpg"
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";


const Navbar = () => {
        //  const [menu,setMenu]=(false)
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md' >
        <div className='flex justify-between items-center h-16'>
            <div className=' flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className=' font-semibold text-xl cursor-pointer'>vishakh <span className='text-green-500 text-2xl ml-[-5px]'>a</span>
                <p className=' text-sm'>web devloper</p></h1>
            </div>
             {/* desktop navbar  */}
            <div>
            <ul className='hidden md:flex space-x-8'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contect</li>
            </ul>
            {/* <div onClick={()=>setMenu(!menu)}>{menu?<FiMenu />: <IoCloseCircleSharp /> }</div> */}
            {/* {<IoCloseCircleSharp />} */}

        </div> 
            </div>

            {/* mobile navbar  */}

            <div>
                <ul className='md:hidden '>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contect</li>
                </ul>
            </div>
        
     </div>
  )
}

export default Navbar;
