import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const PriceFilter = ({ onChange }) => {
  const [values, setValues] = useState({
    min: 0,
    max: 0,
  })

  const FilterPriceOption1 = () => {
    if (onChange) onChange(0, 5000000)
  }
  
  const FilterPriceOption2 = () => {
    if (onChange) onChange(0, 20000000)
  }

  const FilterPriceOption3 = () => {
    if (onChange) onChange(20000000, 900000000000000)
  }

  const handlechage = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }
  // const validdate = () => {
  //   let checkdl = true;
  //   if(values.max <= 0 ) {
  //     checkdl =  false;
  //   }
  //   return checkdl;
  // }
  const handleFilter = () => {
    if(values.max===0) {
      toast.error("max not valid");
    } else {
      if (onChange) onChange(values.min,values.max)
    }
  }

  return (
    <>
    <ToastContainer />
      <div>
        <h1 className='text-xl mt-2 p-2'>theo giá</h1>
        <div className='flex flex-col justify-start'>
          <span onClick={FilterPriceOption1} className='bg-slate-200 rounded-lg py-1 px-6 mb-3 cursor-pointer' >dưới 5 triệu</span>
          <span onClick={FilterPriceOption2} className='bg-slate-200 rounded-lg py-1 px-6 mb-3 cursor-pointer'>dưới 20 triệu</span>
          <span onClick={FilterPriceOption3} className='bg-slate-200 rounded-lg py-1 px-6 mb-3 cursor-pointer'>trên 20 triệu</span>
          <h1 className='text-xl mt-2 p-2'>lọc theo khoảng giá</h1>
          <div className='flex flex-col'>
            <TextField
              id="outlined-number"
              label="min"
              className='w-36'
              type="number"
              name="min"
              onChange={handlechage}
              value={values.min < 0 ? 0 : values.min}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <span className='my-2'></span>
            <TextField
              id="outlined-number"
              label="max"
              className='w-36 mt-6'
              name='max'
              onChange={handlechage}
              value={values.max}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <button onClick={handleFilter} className='bg-emerald-400 mt-2 py-2 px-4'>áp dụng</button>
        </div>
      </div>
    </>
  )
}

export default PriceFilter