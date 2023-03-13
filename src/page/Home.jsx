import React from 'react'
import Header from '../components/include/Header/Header';
import Content from '../components/Content/Content';
import ProductsTrending from '../components/Products/ProductsTrending'
import Footer from '../components/include/footer/Footer';
const Home = () => {
    return (
        <>
           <Header />
           <Content />
           <ProductsTrending />
           <Footer />
        </>
    )
}

export default Home