import React from 'react'
import Header from '../components/include/Header/Header';
import Banner from '../components/Banner/Banner';
import ProductsTrending from '../components/ProductsTrending/ProductsTrending'
import Footer from '../components/include/footer/Footer';
import Marketting from '../components/marketting/Marketting';
import Categorys from '../components/category/Categorys';
import Marketting2 from '../components/marketting/Marketting2';
import News from '../components/news/News';
const Home = () => {
    return (
        <div className=''>
            <Header />
            <Banner />
            <ProductsTrending />
            <Marketting />
            <Categorys />
            <Marketting2 />
            <News />
            <Footer />
        </div>
    )
}

export default Home