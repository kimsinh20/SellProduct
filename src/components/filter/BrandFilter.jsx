import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillFilter } from "react-icons/ai";
import CategoryApi from './../../api/CategoryApi';
import BrandApi from './../../api/BrandApi';
import { PropTypes } from 'prop-types';

const BrandFilter = ({onChange}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchProductApi = async () => {
            try {
                const response = await BrandApi.getAll();
                setCategories(response);
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
                <h1 className='text-xl mt-2 p-2'>theo danh mục</h1>
                <div>
                    <FormGroup>
                        {categories.map((e) => (
                            <FormControlLabel key={e.brandId} onChange={()=>handleClick(e)} control={<Checkbox color='success' />} label={e.brandName} />
                        ))}
                    </FormGroup>
                </div>
            </div>
        </>
    )
}
BrandFilter.prototype = {
    onChange : PropTypes.func
}
export default BrandFilter