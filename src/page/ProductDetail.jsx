import React from 'react'
import ProductApi from '../api/ProductApi';
import { useState, useEffect } from 'react';
import Header from "../components/include/Header/Header"
import { Container, Skeleton, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import Footer from '../components/include/footer/Footer';

const ProductDetail = () => {
  // const id = 1;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCatogory] = useState({});
  const [brand, setBrand] = useState({});
  const {pid} = useParams();
  useEffect(() => {
    const getID = async () => {
      try {
        await ProductApi.getProductId(pid).then((response) => {
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
  }, [pid]);
  return (
    <>
      <Header />
      <Container className='mt-4'>
        <div class="flex font-serif">
          <div class="flex-none w-52 relative">
            <img src={imgUrl} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap items-baseline">
              <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                {name}
              </h1>
              <div class="flex-auto text-lg font-medium text-slate-500">
                ${price}
              </div>
              <div class="text-xs leading-6 font-medium uppercase text-slate-500">
                In stock
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-1 flex text-sm font-medium">
                {description}
              </div>
            </div>
            <div class="flex space-x-4 mb-5 text-sm font-medium">
              <div class="flex-auto flex justify-around space-x-4 pr-4">
                <Button variant="contained" size='large' className='w-80' color="success">
                  Buy now
                </Button>
                <Button variant="contained" size='large' className='w-80' color="success">
                  Add to cart
                </Button>
              </div>
              <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p class="text-sm text-slate-500">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default ProductDetail