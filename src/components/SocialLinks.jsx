import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
    
    return (
        <div className='flex flex-col top-[38%] left-0 fixed'>
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-67px] hover:ml-0 duration-500 rounded-tr-lg hover:rounded-br-lg hidden md:flex">
                    <a href="https://www.linkedin.com/in/davi-rodrigues-cs/" target="_blank" className="flex justify-between items-center w-full text-white" rel="noreferrer"> 
                        <> 
                        LinkedIn <FaLinkedin size={30}/> 
                        </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-67px] hover:ml-0 duration-500 hover:rounded-r-lg hidden md:flex">
                    <a href="https://github.com/NascimentoDavi" target="_blank" className="flex justify-between items-center w-full text-white" rel="noreferrer"> 
                        <> 
                        Github <FaGithub size={30}/> 
                        </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-67px] hover:ml-0 duration-500 rounded-br-lg hover:rounded-r-lg hidden md:flex">
                    <a href="https://www.instagram.com/nascimento_davir/" target='_blank' className="flex justify-between items-center w-full text-white" rel="noreferrer"> 
                        <> 
                        Instagram <FaInstagram size={30}/> 
                        </>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks