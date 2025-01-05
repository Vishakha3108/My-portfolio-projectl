import React from "react"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

import pic from "../../public/IMG_20221227_152428_051.jpg"



function Home() {
  return (
    <>

    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
        <span className="text-xl font-semibold">Welcome in my Feed</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I'm a</h1>
        {/* <span className="text-red-700 font-bold">Devloper</span> */}
        <ReactTyped
           className="text-red-700 font-bold"
          strings={["Devloper","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={"true"}
        />
        </div>
        <br />
        <p className=" text-sm md:text-md text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste, atque neque quisquam quod, nihil aspernatur doloribus sit dignissimos recusandae corporis omnis consequatur? Quisquam atque laudantium quia. Sed, recusandae voluptatibus.
            Totam doloribus neque officia ea quam sunt voluptatum, iusto minus id quia saepe aliquid corrupti quis rem. Error explicabo officia dolorum fugit repellendus. Consectetur amet tempore ducimus error voluptatibus obcaecati.
            Ratione sequi sed earum sint ad dolorum ex laborum vero quis laudantium in veniam vitae, error nisi neque optio corrupti, autem debitis modi quo numquam fuga exercitationem dignissimos.
        </p>
        <br />
        {/* social media icons  */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 "> 
        <div className="space-y-2 ">
            <h2 className="font-semibold text-lg">Availabale on</h2>
            <ul className="flex space-x-5">
                <li>
                    <a href="https://github.com/Vishakha3108" target="_blank">
                    <FaGithubSquare className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/vishakhabhojak3108/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                </li>
            </ul>
             </div>
             <div className="space-y-2">
             <h2 className="font-semibold text-lg">Currently Working On</h2>
            <div className="flex space-x-5">
            <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-200" />
            <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-200" />
            <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-200" />
            <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] border-gray-200" />
            </div>

             </div>

        </div>
       
        </div>
        <div className="md:w-1/2 md:ml-64 md:mt-20 order-1">
        <img src={pic} alt="" className="rounded-full md:w-[400px] md:h-[450px] h-[300px] w-[280px] ml-14 mt-4" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home

