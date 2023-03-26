import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { default as React, useEffect, useState } from 'react';
import { AiFillFilter } from "react-icons/ai";
import CategoryApi from './../../api/CategoryApi';
import { PropTypes } from 'prop-types';

const CategoryFilter = ({ onChange }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await CategoryApi.getAll();
                setCategories(response);
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
                <p className='uppercase text-2xl'>bộ lọc tìm kiếm </p>
                
            </span>
            <div>
                <h1 className='text-2xl mt-2 p-2'>Theo danh mục</h1>
                <div className='flex flex-col text-xl pl-1'>                  
                        {categories.map((e) => (
                            <span className='cursor-pointer my-1 py-1' key={e.categoryId} onClick={()=>handleClick(e)}>{e.categoryName}</span>
                        ))}
                </div>
                {/* <div>
                    <FormGroup>
                        {brands.map((e) => (
                            <FormControlLabel key={e.categoryId} onChange={()=>handleClick(e)} control={<Checkbox color='success' />} label={e.categoryName} />
                        ))}
                    </FormGroup>
                </div> */}
            </div>
        </>
    )
}

CategoryFilter.prototype = {
    onChange : PropTypes.func
}
export default CategoryFilter