import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductTrendingItem = ({ card }) => {
  const { id, name, price, imageUrl } = card;
  const link = `api/v1/products/${id}`;
  return (
    <div className='relative mt-4 bg-red-300 rounded shadow-md shadow-red-200 text-center hover:scale-105 transition'>
      <img className='w-full min-h-min' src={imageUrl} alt='noimage'></img>
      <h4 className='capitalize tetx-bold text-2xl'>{name}</h4>
      <div className='absolute top-1 ml-3 px-2 py-1 mt-2 rounded bg-white '>{price}</div>
      <Link to={link}>
        <Button >Detail</Button>
      </Link>
    </div>
  )
}

export default ProductTrendingItem;