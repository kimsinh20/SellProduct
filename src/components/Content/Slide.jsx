import React from 'react'
import baner from "../../img/baner.png"
import baner1 from "../../img/baner1.jpeg"

const Slide = () => {
  return (
    <div className='mt-4'>
      <h1 className='uppercase text-2xl font-bold text-center mt-2 mb-2 hover:text-red-400'>sale</h1>
        <img src={baner} alt="no" height={400}  className="mb-4 w-full"/>
        <img src={baner1} alt="no" height={400}/>
    </div>
  )
}

export default Slide