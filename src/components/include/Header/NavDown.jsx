import React from 'react'
import { Link } from 'react-router-dom'
import {AiTwotoneHome,AiFillContacts} from "react-icons/ai"
import {FaFirstOrderAlt} from "react-icons/fa"
import {TiVendorApple} from "react-icons/ti"
import {MdContactPage,MdAccountCircle} from "react-icons/md"

const NavDown = () => {
    return (
        <div className='mt-2 pb-2'>
            <ul className="text-2xl flex justify-center">
                <li className=''>
                    <Link to='/' className='flex mr-7'><AiTwotoneHome className='mt-1'/>home</Link>
                </li>
                <li className=''>
                    <Link to='/pages' className='flex mr-7'><MdContactPage className='mt-1'/>pages</Link>
                </li> 
                <li>
                    <Link to='/user' className='flex mr-7'><MdAccountCircle className='mt-1'/>user account</Link>
                </li>
                <li>
                    <Link to='/vendor' className='flex mr-7'><TiVendorApple className='mt-1'/>about</Link>
                </li>
                <li>
                    <Link to='/track' className='flex mr-7'><FaFirstOrderAlt className='mt-1'/>track my order</Link>
                </li>
                <li className=''>
                    <Link to='/contact' className='flex mr-7'><AiFillContacts className='mt-1'/>contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavDown