import React from 'react'
import Navbar from './Navbar'
import SaleBaner from './SaleBaner';
import Slideshow from './Slideshow';

const Content = () => {
    return (
        <div className='grid grid-cols-6'>
            {/* <Navbar/> */}
            <Slideshow />
            <SaleBaner />
        </div>
    )
}

export default Content