import { Typography } from '@mui/material';
import React from 'react'
import CategoryItem from './CategoryItem';
import { useState, useEffect } from 'react';
import CategoryApi from '../../api/CategoryApi';
import { useSelector } from 'react-redux';
import language from './../../language/language';
import CategorySketon from './CategorySketon';

const Categorys = () => {
  const [categories,setCategories] = useState([]);
  const lg = useSelector((state) => state.language.language);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const fetchProductApi = async () => {
        try {
            const params = { };
            const response = await CategoryApi.getAll(params);
            setCategories(response);
            // setLoading(false);
            // console.log("Fetch category successfully: ", response);
        } catch (error) {
            console.log("Failed to fetch category list: ", error);
        }
    };
    return ()=> {
      fetchProductApi();
    }
}, []);

  return (
    <div className=''>
        <h1  className='mt-2 pt-2 uppercase font-bold text-2xl text-center'>
          {lg === 'en' ? language.category.en : language.category.vn}
        </h1>
       {loading ? <CategorySketon categories={categories} /> : <CategoryItem categories={categories} />}
    </div>
  )
}

export default Categorys