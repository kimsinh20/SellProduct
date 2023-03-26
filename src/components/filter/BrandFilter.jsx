import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillFilter } from "react-icons/ai";
import CategoryApi from './../../api/CategoryApi';
import BrandApi from './../../api/BrandApi';
import { PropTypes } from 'prop-types';

const BrandFilter = ({onChange}) => {
    const [brands, setBrand] = useState([]);
    useEffect(() => {
        const fetchProductApi = async () => {
            try {
                const response = await BrandApi.getAll();
                setBrand(response);
                // console.log("Fetch category successfully: ", response);
            } catch (error) {
                console.log("Failed to fetch category list: ", error);
            }
        };
        return () => {
            fetchProductApi();
        }
    }, [])
    const handleClick = (e) => {
        if (onChange) {
            onChange(e.brandName)
        }
    }
    return (
        <>
            <div>
            <h1 className='text-2xl mt-2 py-2'>Theo thương hiệu</h1>
                <div className='flex flex-col text-xl pl-1'>                  
                        {brands.map((e) => (
                            <span className='cursor-pointer my-1 py-1' key={e.brandId} onClick={()=>handleClick(e)}>{e.brandName}</span>
                        ))}
                         {/* <FormGroup>
                        {brands.map((e) => (
                            <FormControlLabel key={e.categoryId} onChange={()=>handleClick(e)} control={<Checkbox color='success' />} label={e.categoryName} />
                        ))}
                    </FormGroup> */}
                </div>
            </div>
        </>
    )
}
BrandFilter.prototype = {
    onChange : PropTypes.func
}
export default BrandFilter