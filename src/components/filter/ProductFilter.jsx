import React from 'react'
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';

const ProductFilter = ({filter,onChange}) => {
    const handleCategoryChange = (NewCategoryName) => {
        if(!onChange) return;
        const newFilter = {
            ...filter,
            keyword : NewCategoryName
        }
        onChange(newFilter);
    }
    return (
        <>
            <CategoryFilter onChange={handleCategoryChange} />
            <BrandFilter />
            <PriceFilter />
        </>
    )
}

export default ProductFilter