import React from 'react'
import NavDown from './NavDown'
import NavUp from './NavUp'

const Menu = () => {
  return (
    <section className='bg-lime-200'>
        <NavUp />
        <NavDown />
    </section>
  )
}

export default Menu