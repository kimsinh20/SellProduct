import React from 'react'
import { Skeleton } from '@mui/material';

const CategorySketon = () => {
    const categories = [
        {},
        {},
        {},
        {},
    ]
    return (
        <div className='grid xl:grid-cols-4 sm:grid-cols-2 my-4'>
            {categories.map((e,i)=> (
                <div className='mt-5 justify-center flex flex-col items-center' key={i}>
                    <Skeleton variant="circular" className='mb-6' width={200} height={200}  />
                    <Skeleton variant="rectangular" width={340} height={40} />
                </div>
            ))}
        </div>
    )
}

export default CategorySketon