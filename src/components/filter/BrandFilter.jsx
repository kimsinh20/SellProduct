import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillFilter } from "react-icons/ai";
import CategoryApi from './../../api/CategoryApi';
import BrandApi from './../../api/BrandApi';
const BrandFilter = () => {
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
    return (
        <>
            <div>
                <h1 className='text-xl mt-2 p-2'>theo danh mục</h1>
                <div>
                    <FormGroup>
                        {categories.map((e) => (
                            <FormControlLabel key={e.brandId} control={<Checkbox color='success' />} label={e.brandName} />
                        ))}
                    </FormGroup>
                </div>
            </div>
        </>
    )
}

export default BrandFilter