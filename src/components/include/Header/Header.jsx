import React from 'react'
import Head from './Head'
import Menu from './Menu'

const header = () => {
  return (
    <div className='relative '>
      <Head />
      <Menu />
    </div>
  )
}

export default header