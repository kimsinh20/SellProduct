import React from 'react'
import ProductApi from './../../api/ProductApi';
import { useState, useEffect } from 'react';
import Header from "../include/Header/Header"
import { Skeleton } from '@mui/material';

const ProductDetail = () => {
  const id=1;
const [name,setName] = useState('');
const [price,setPrice] = useState('');
const [imgUrl,setImgUrl] = useState('');
const [description,setDescription] = useState('');
const [category,setCatogory] = useState({});
const [brand,setBrand] = useState({});
  useEffect (() => {
    const getID = async () => {
      try {
        await ProductApi.getProductId(id).then((response)=> {
        setName(response.name);
        setDescription(response.description);
        setImgUrl(response.imageUrl);
        setPrice(response.price);
        setCatogory(response.category);
        setBrand(response.Brand);
        console.log(response)
       })
      } catch (error) {
        console.log("error: ", error);
      }
    }
    getID();
  }, [id]);
  return (
    <>
    <Header/>
    </>
  )
}

export default ProductDetail