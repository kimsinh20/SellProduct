import React from 'react';
import Footer from '../footer/Footer';
import Header from './Header';
import imgNoResult from "../../../img/nosearch.png";
import ProductsTrending from '../../ProductsTrending/ProductsTrending';

const NotResultSearch = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col items-center col-span-5'>
                <img alt='img' src={imgNoResult} width={300}></img>
                <span className='text-2xl'>No results are found </span>
                <span className='text-2xl'>try using more general keywords </span>
            </div>
            <ProductsTrending/>
            <Footer />
        </>
    )
}

export default NotResultSearch