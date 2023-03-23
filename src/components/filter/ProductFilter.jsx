import React from 'react'
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import { PropTypes } from 'prop-types';

const ProductFilter = ({filter,onChange}) => {
    const handleCategoryChange = (NewCategoryName) => {
        if(!onChange) return;
        const newFilter = {
            ...filter,
            keyword : NewCategoryName
        }
        onChange(newFilter);
    }
    const handleBrandChange = (NewBrandName) => {
        if(!onChange) return;
        const newFilter = {
            ...filter,
            keyword : NewBrandName
        }
        onChange(newFilter);
    }
    return (
        <>
            <CategoryFilter onChange={handleCategoryChange} />
            <BrandFilter onChange={handleBrandChange} />
            <PriceFilter />
        </>
    )
}

ProductFilter.propTypes = {
    filter : PropTypes.object.isRequired,
    onChange : PropTypes.func
}
export default ProductFilter


