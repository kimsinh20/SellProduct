import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductApi from '../../api/ProductApi';
import ProductFilter from '../../components/filter/ProductFilter';
import Footer from '../../components/include/footer/Footer';
import Header from '../../components/include/Header/Header';
import ProductTrendingRender from './ProductRender';
import ProductSkelaton from './ProductSkelaton';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState(8);
    const [totalPage, setTotalPage] = useState(0);
    // const [totalProduct,setTotalProduct] = useState(0);
    const [filter, setFilter] = useState({
        page: 1,
        size: size,
        keyword : ""
    })
    const lg = useSelector((state) => state.language.language);

    const handlePagination = ((e, p) => {
        e.preventDefault();
        setFilter(prevFilter => ({
            ...prevFilter,
            page: p
        }))
    })
    useEffect(() => {
        (async () => {
            try {
                const params = filter;
                const response = await ProductApi.getAll(params);
                setProducts(response.products);
                setTotalPage(response.totalPage)
                // setTotalProduct(response.totalProduct)
                setLoading(false);
                // console.log("Fetch products successfully: ", response);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
        })();
    }, [filter]);
    const handleFilterChange = () => {
        // setFilter((prevFilter) => ({
        //     ...prevFilter,
        //     ...newFilters
        // }))
        setFilter(prevFilter => ({
            ...prevFilter,
            keyword : "think"
        }))
    }
    return (
        <div>
            <Header />
            <button onClick={handleFilterChange}>click</button>
            <div className='grid grid-cols-6 mt-8'>
                <div className='col-span-1 flex flex-col items-center'>
                    <ProductFilter 
                    filter={filter} 
                    // onChange={handleFilterChange} 
                    />
                </div>
                <div className='col-span-5'>
                    {loading ? <ProductSkelaton products={products} /> : <ProductTrendingRender products={products} />}
                    <div className='flex justify-center mb-4'>
                        <Pagination
                            color='primary'
                            count={totalPage}
                            page={filter.page}
                            onChange={handlePagination}
                        >
                        </Pagination>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList