import React from 'react'
import { Box, Grid, Skeleton } from '@mui/material';

const ProductSkelaton = () => {
    const arrlist = [1, 2, 3, 4];
    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5'>
            {arrlist.map((e,i) => (
                <div className='mb-5' key={i}>
                    <Box spacing={1}>
                        <Skeleton variant="rectangular" width={340} height={190} />
                        <Skeleton variant="text" width={340} height={60} />
                    </Box>
                </div>
            )
            )}
        </div>


        // <Grid container className='mb-3 mt-5' >
        //     {arrlist.map((e) => (
        //         <Grid key={e}   lg={2}>
        //             <Box spacing={1}>
        //                 <Skeleton  variant="rectangular" width={300} height={150} />
        //                 <Skeleton variant="text" width={300} height={30} />
        //             </Box>
        //         </Grid>
        //     )
        //     )}
        // </Grid>

    )
}

export default ProductSkelaton
