import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductApi from '../../api/ProductApi';
import ProductSkelaton from './ProductSkelaton';
import ProductTrendingRender from './ProductTrendingRender';
import { useSelector } from 'react-redux';
import language from './../../language/language';
const ProductsTrending = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [size, setSize] = useState(4);
    const lg = useSelector((state) => state.language.language);
    useEffect(() => {
        const fetchProductApi = async () => {
            try {
                const params = { page: 0, size: size };
                const response = await ProductApi.getProductTrending(params);
                setProducts(response.products);
                setLoading(false);
                // console.log("Fetch products successfully: ", response);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
        };
        return ()=> {
            fetchProductApi();
        }
    }, [size]);
    const clickLoadMore = () => {
        setSize(size + 2)
    }
    return (
        <div className='m-10 bg-white'>
            <h3 className='mb-2.5 capitalize text-2xl border-b-2 border-emerald-900'>
            {lg === 'en' ? language.Trending.en : language.Trending.vn}
            </h3>
              {loading ? <ProductSkelaton />  : <ProductTrendingRender products={products}/> }
            <div className='flex justify-center'>
                <button onClick={clickLoadMore} style={{display : size>8 ? "none" : "block" }} id='loadmore' className='btn px-4 py-2 mb-3 font-bold uppercase bg-transparent text-purple-900 border-2 border-purple-900 hover:bg-slate-500 hover:scale-125 transition'>load more</button>
            </div>
        </div>
    )
}

export default ProductsTrending;