import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem = ({newsitem}) => {
    const link = `/api/v1/news/${newsitem.id}`;
  return (
    <div className='w-72 border-2 border-gray-400 rounded-3xl'>
        <Link to={link} className=""> 
        <img alt='no image' className='rounded-tr-3xl rounded-tl-3xl p-2' src={newsitem.image} width={288}></img>
        <p className='px-4 font-bold text-2xl py-2 mt-2'>{newsitem.title}</p>
        </Link>
    </div>
  )
}

export default NewsItem