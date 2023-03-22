import React from 'react'

const PriceFilter = () => {
  return (
        <>
            <div>
                <h1 className='text-xl mt-2 p-2'>theo giá</h1>
                <div className='flex flex-col'>
                  <span className='bg-slate-200 rounded-lg py-1 px-6 mb-3' >dưới 5 triệu</span>
                  <span className='bg-slate-200 rounded-lg py-1 px-6 mb-3'>dưới 15 triệu</span>
                  <span className='bg-slate-200 rounded-lg py-1 px-6 mb-3'>trên 20 triệu</span>
                </div>
            </div>
        </>
  )
}

export default PriceFilter