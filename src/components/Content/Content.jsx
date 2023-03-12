import React from 'react'
import Navbar from './Navbar'
import Slide from './Slide';
import Slideshow from './Slideshow';

const Content = () => {
    return (
        <div className='grid grid-cols-5'>
            <Navbar/>
            <Slide />
            <Slideshow />
        </div>
    )
}

export default Content