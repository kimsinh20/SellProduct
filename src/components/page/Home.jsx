import React from 'react'
import Header from '../../components/include/Header/Header';
import Content from '../../components/Content/Content';
import ProductsTrending from '../Products/ProductsTrending';
const Home = () => {
    return (
        <>
           <Header />
           <Content />
           <ProductsTrending />
        </>
    )
}

export default Home