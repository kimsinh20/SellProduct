import React from 'react'
import Header from '../components/include/Header/Header';
import Banner from '../components/Banner/Banner';
import ProductsTrending from '../components/Products/ProductsTrending'
import Footer from '../components/include/footer/Footer';
import Marketting from '../components/marketting/Marketting';
import Categorys from '../components/category/Categorys';
const Home = () => {
    return (
        <div className=''>
           <Header />
           <Banner />
           <ProductsTrending />
           <Marketting />
           <Categorys />
           <Footer />
        </div>
    )
}

export default Home