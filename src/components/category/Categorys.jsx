import { Typography } from '@mui/material';
import React from 'react'
import CategoryItem from './CategoryItem';
import { useState, useEffect } from 'react';
import CategoryApi from '../../api/CategoryApi';

const Categorys = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    const fetchProductApi = async () => {
        try {
            const params = { };
            const response = await CategoryApi.getAll(params);
            setCategories(response);
            // console.log("Fetch category successfully: ", response);
        } catch (error) {
            console.log("Failed to fetch category list: ", error);
        }
    };
    fetchProductApi();
}, []);
  return (
    <div className=''>
        <h1  className='mt-2 pt-2 uppercase font-bold text-2xl text-center'>Category</h1>
        {categories.map((e, i) => <CategoryItem key={i} item={e} />)}
    </div>
  )
}

export default Categorys