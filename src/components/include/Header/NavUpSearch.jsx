import { Paper, TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ProductApi from './../../../api/ProductApi';

const NavUpSearch = () => {
  const [keyword,SetKeyword] = useState("");
  const [products, SetProducts] = useState([]);
  const [openResult, SetOpenResult] = useState(false);
  const inputRef = useRef();
  const [params, setParams] = useState({
    page: 1,
    size: 5,
  })
  useEffect(() => {
    (async () => {
      try {
        const response = await ProductApi.getAll(params);
        SetProducts(response.products);
        // setTotalProduct(response.totalProduct)
        // console.log("Fetch products successfully: ", response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, [params])


  // hide / show result 
  useEffect(() => {
    // Add event listener to detect clicks outside the input
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        SetOpenResult(false);
        SetKeyword("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);
  // handle search
  const handleSearch = (e) => {
    SetKeyword(e.target.value);
    setParams({
      ...params,
      keyword : keyword
    })
  }
  const handleClickSearch = () => {
  
  }
  return (
    <div className='relative' ref={inputRef}>
      <div className='text-center flex'>
        <TextField
          fullWidth
          label="key word"
          id="fullWidth"
          value={keyword}
          onInput={(e)=>handleSearch(e)}
          onClick={() => SetOpenResult(true)}
        // onMouseDown={()=> SetOpenResult(false)}
        />
      </div>
      {openResult && (
        <Paper className='absolute w-full z-50'>
          <ul>
            {products.length<=0 && (
            <p className='text-xl py-2 pl-2'>not result match with keyword 
            <Link to={"/products/noresult"} className='text-sky-600 cursor-pointer' onClick={handleClickSearch}>search with keyword : {keyword} </Link> </p>
            )}
            {products.length>0 && (
            products.map((e) =>
            (
              <Link key={e.id} to={`/products/${e.id}`}>
                <li className='w-full text-xl py-2 my-1 pl-4 hover:bg-slate-300 cursor-pointer ' >{e.name}</li>
              </Link>
            )
            )
            )}
          </ul>
        </Paper>
      )}
    </div>
  )
}

export default NavUpSearch