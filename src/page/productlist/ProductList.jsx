import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductApi from '../../api/ProductApi';
import ProductFilter from '../../components/filter/ProductFilter';
import Footer from '../../components/include/footer/Footer';
import Header from '../../components/include/Header/Header';
import ProductRender from './ProductRender';
import ProductSkelaton from './ProductSkelaton';
import imgNoResult from "../../img/nosearch.png";
import ProductSort from '../../components/sort/ProductSort';
import FilterView from './../../components/filter/FilterView';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState(16);
    const [totalPage, setTotalPage] = useState(0);
    // const [totalProduct,setTotalProduct] = useState(0);
    const [filter, setFilter] = useState({
        page: 1,
        size: size,
        // min: 0,
        // max: 0,
        _sort: "name:asc"
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
                const response = await ProductApi.getAll(filter);
                setProducts(response.products);
                setTotalPage(response.totalPage)
                // setTotalProduct(response.totalProduct)
                setLoading(false);
                console.log("Fetch products successfully: ", response);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
        })();
    }, [filter]);

    const handleFilterChange = (newFilters) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            ...newFilters
        }))
    }
    const handleSort = (newSortValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            _sort: newSortValue
        }))
    }
    // console.log(filter)
    const handleFilterView = (newFilter) => {
        setFilter(newFilter);
    }
    return (
        <div>
            <Header />
            {/* <button onClick={handleFilterChange}>click</button> */}
            <div className='grid grid-cols-6 mt-8'>
                {loading ? (<h1 className='text-center text-3xl'>not data</h1>) : (
                    <div className='col-span-1 flex flex-col items-center'>
                        <ProductFilter
                            filter={filter}
                            onChange={handleFilterChange}
                        />
                    </div>)
                }
                {products.length <= 0 && (
                    <div className='flex flex-col items-center col-span-5'>
                        <img alt='img' src={imgNoResult} width={300}></img>
                        <span className='text-2xl'>No results are found </span>
                        <span className='text-2xl'>try using more general keywords </span>
                    </div>
                )}
                {products.length > 0 && (
                    <div className='col-span-5'>
                        <div className='flex justify-start'>
                            <FilterView filter={filter} onChange={handleFilterView} />
                        </div>
                        <div className='flex justify-start'>
                            <ProductSort currentSort={filter._sort} onChange={handleSort} />
                        </div>

                        {loading ? <ProductSkelaton products={products} />
                            : (
                                <>
                                    <ProductRender products={products} />
                                    <div className='flex justify-center mb-4'>
                                        <Pagination
                                            color='primary'
                                            count={totalPage}
                                            page={filter.page}
                                            onChange={handlePagination}
                                        >
                                        </Pagination>
                                    </div>
                                </>
                            )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default ProductList