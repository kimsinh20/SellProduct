import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const CategoryItem = ({item}) => {
  const {categoryId,categoryName,imageUrl} = item;
  const link = `api/v1/category/${categoryId}`;
  return (
    <section className='mt-5 '>
      <Link className='no-underline flex ml-20' to={link}>
        <img src={imageUrl} className='mr-4' alt='no' width={40}></img>
        <h1 className='uppercase text-2xl font-bold hover:text-violet-600'>
        {categoryName}
        </h1>
        </Link>
    </section>
  )
}

export default CategoryItem