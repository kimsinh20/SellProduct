import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { default as React, useEffect, useState } from 'react';
import { AiFillFilter } from "react-icons/ai";
import CategoryApi from './../../api/CategoryApi';

const CategoryFilter = ({ onChange }) => {
    const [brands, setBrand] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await CategoryApi.getAll();
                setBrand(response);
                // console.log("Fetch category successfully: ", response);
            } catch (error) {
                console.log("Failed to fetch category list: ", error);
            }
        })();
    }, []);
    const handleClick = (e) => {
        if (onChange) {
            onChange(e.categoryName)
        }
    }
    return (
        <>
            <span className=' flex'>
                <AiFillFilter className='text-3xl' />
                <p className='uppercase text-2xl'>bộ lọc tìm kiếm</p>
            </span>
            <div>
                <h1 className='text-xl mt-2 p-2'>theo danh mục</h1>
                <div>
                    <FormGroup>
                        {brands.map((e) => (
                            <FormControlLabel key={e.categoryId} onClick={handleClick(e)} control={<Checkbox color='success' />} label={e.categoryName} />
                        ))}
                    </FormGroup>
                </div>
            </div>
        </>
    )
}

export default CategoryFilter