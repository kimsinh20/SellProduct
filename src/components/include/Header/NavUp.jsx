import React from 'react'
import {TextField} from "@mui/material"
import {BsFillCartCheckFill} from "react-icons/bs"
import Avatar from '@mui/material/Avatar'
import {FaUserAlt,FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
const NavUp = () => {
    return (
        <>
            <section className='grid grid-cols-3 pt-2 pb-2'>
                    <div className='flex justify-center font-bold '>
                        <Link to={"/"}>
                        <p className='text-4xl'>KS<span className='font-xs text-3xl text-red-600'>SHOP</span> </p>
                        </Link>
                    </div>

                    <div className='text-center flex'>
                    <TextField fullWidth label="key word" id="fullWidth" />
                        {/* <FaSearch /> */}
                    </div>
                    <div className='flex justify-center '>
                        <Link to={"/user"}>
                             <Avatar  variant='solid' className='mr-8 mb-4' size='sm' />
                        </Link>

                        <Link to={"/cart"}>
                            <BsFillCartCheckFill className='text-4xl' />
                        </Link>
                           
                    </div>
            </section>
        </>
    )
}
export default NavUp;
