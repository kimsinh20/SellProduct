import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, showMiniCart } from '../../slice/cartSlice/cartSlice';

const ProductTrendingItem = ({ card }) => {
  const { id, name, price, imageUrl } = card;
  const link = `api/v1/products/${id}`;
  const dispatch = useDispatch();
  const formatVnd = (x) => {
    return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  console.log(card)
  const handleAddToCart = () => {
  const action = addToCart({
    id,
    product : card,
    quantity : 1
  })
  dispatch(action);
  const acction2 = showMiniCart();
    dispatch(acction2);
  }
  return (
    <div className='relative mt-4 bg-red-300 rounded shadow-md shadow-red-200 hover:scale-105 transition'>
      <Link to={link}>
        <img className='w-full min-h-min' src={imageUrl} alt='noimage'></img>
      </Link>
      <h4 className='capitalize tetx-bold text-2xl text-center'>{name}</h4>
      <div className='absolute top-1 ml-3 px-2 py-1 mt-2 rounded bg-white '>{formatVnd(price)}</div>
      <div className='flex justify-around my-2'>
        <Link to={link}>
          <button className='text-xl rounded-md text-center w-40 text-white px-3 py-2 bg-orange-400 uppercase' >Detail</button>
        </Link>
        <button className='text-xl rounded-md text-center w-32 text-white px-3 py-2 bg-orange-400 uppercase' onClick={handleAddToCart} >add to cart</button>
      </div>
    </div>
  )
}

export default ProductTrendingItem;