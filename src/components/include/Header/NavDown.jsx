import React from 'react'
import { Link } from 'react-router-dom'
import {AiTwotoneHome,AiFillContacts} from "react-icons/ai"
import {FaFirstOrderAlt} from "react-icons/fa"
import {TiVendorApple} from "react-icons/ti"
import {MdContactPage,MdAccountCircle} from "react-icons/md"
import { useSelector } from 'react-redux';
import language from './../../../language/language';

const NavDown = () => {
    const lg = useSelector((state) => state.language.language);
    return (
        <div className='mt-2 pb-2'>
            <ul className="text-2xl flex justify-center">
                <li className=''>
                    <Link to='/' className='flex mr-7'><AiTwotoneHome className='mt-1'/>
                    {lg==='en'?language.home.en:language.home.vn}
                    </Link>
                </li>
                <li className=''>
                    <Link to='/pages' className='flex mr-7'><MdContactPage className='mt-1'/>
                    {lg==='en'?language.pages.en:language.pages.vn}
                    </Link>
                </li> 
                <li>
                    <Link to='/user' className='flex mr-7'><MdAccountCircle className='mt-1'/>
                    {lg==='en'?language.acount.en:language.acount.vn}
                    </Link>
                </li>
                <li>
                    <Link to='/vendor' className='flex mr-7'><TiVendorApple className='mt-1'/>
                    {lg==='en'?language.about.en:language.about.vn}
                    </Link>
                </li>
                <li>
                    <Link to='/track' className='flex mr-7'><FaFirstOrderAlt className='mt-1'/>
                    {lg==='en'?language.order.en:language.order.vn}
                    </Link>
                </li>
                <li className=''>
                    <Link to='/contact' className='flex mr-7'><AiFillContacts className='mt-1'/>
                    {lg==='en'?language.contact.en:language.contact.vn}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavDown