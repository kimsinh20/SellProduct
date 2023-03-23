import React from 'react'
import { Link } from 'react-router-dom';

const CategoryItem = ({categories}) => {
  // const {categoryId,categoryName,imageUrl} = item;
  
  return (
    <div className='grid xl:grid-cols-4 sm:grid-cols-2 my-4'>  
    {categories.map((e, i) => (
    <section className='' key={i}>
      <Link className='no-underline flex flex-col items-center ml-20' to={`products`}>
        <img src={e.imageUrl} className='mr-4 min-h-fit' alt='no' width={260}></img>
        <h1 className='uppercase text-2xl font-bold hover:text-violet-600'>
        {e.categoryName}
        </h1>
        </Link>
    </section>
    ))}
    </div>
  )
}

export default CategoryItem