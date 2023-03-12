import React from 'react'
import ProductTrendingItem from './ProductTrendingItem';

const ProductTrendingRender = ({products}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
        {products.map((e, i) => <ProductTrendingItem key={i} card={e} />)}
    </div>
  )
}

export default ProductTrendingRender