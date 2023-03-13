import React from 'react'
import { Skeleton } from '@mui/material';

const CategorySketon = ({categories}) => {
    console.log(categories.length)
    return (
        <>
            {categories.map((e,i)=> (
                <div className='flex justify-center mt-5'>
                    <Skeleton variant="circular" className='mr-4' width={60} height={40} />
                    <Skeleton variant="rectangular" width={140} height={40} />
                </div>
            ))}
        </>
    )
}

export default CategorySketon