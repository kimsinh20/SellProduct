import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const CategoryItem = ({categories}) => {
  // const {categoryId,categoryName,imageUrl} = item;
  const link = `api/v1/category/${categories.categoryId}`;
  return (
    <>  
    {categories.map((e, i) => (
    <section className='mt-5 '>
      <Link className='no-underline flex ml-20' to={link}>
        <img src={e.imageUrl} className='mr-4' alt='no' width={40}></img>
        <h1 className='uppercase text-2xl font-bold hover:text-violet-600'>
        {e.categoryName}
        </h1>
        </Link>
    </section>
    ))}
    </>
  )
}

export default CategoryItem