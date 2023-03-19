import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsApi from '../../api/NewsApi';
import language from '../../language/language';
import NewsItem from './NewsItem';

const News = () => {
  const [news, setNews] = useState([])
  const lg = useSelector((state) => state.language.language);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const params = {};
        const response = await NewsApi.get4News(params);
        setNews(response);
        // console.log("Fetch news successfully: ", response);
      } catch (error) {
        console.log("Failed to fetch news list: ", error);
      }
    }
    return () => fetchNews();
  }, [])
  return (
    <div className='px-8 py-6'>
      <h3 className='mb-2.5 capitalize text-2xl border-b-2 border-emerald-900'>
        {lg === 'en' ? language.news.en : language.news.vn}
      </h3>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 mt-4'>
        {news.map((e, i) => (<NewsItem key={i} newsitem={e} />))}
      </div>
      <div className='mt-8 text-center'>
        <Link to={"/news"}>
          <button id='loadmore' className='btn px-4 py-2 mb-3 font-bold uppercase bg-transparent text-purple-900 border-2 border-purple-900 hover:bg-slate-500 hover:scale-125 transition'>load more</button>
        </Link>
      </div>
    </div>
  )
}

export default News