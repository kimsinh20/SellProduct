import React from 'react'

const marketting2 = () => {
    return (
        <div className='mx-8'>
            <div className="p-7 bg-[url('https://salt.tikicdn.com/ts/brickv2og/e4/0f/f3/ed1b12221c289369e26ce3bee2b93421.png')]">
                <h1 className='capitalize py-6 flex justify-center text-4xl font-bold text-white italic'>
                    giá sốc
                    <img src='https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg' width={20} className='animate-ping mx-2' alt='no img'></img>
                    hôm nay
                </h1>
                <div className='grid xl:grid-cols-4'>
                    <div className='flex flex-col m-auto'>
                          <p className='text-white font-bold text-3xl'>8:00</p>
                          <span className='text-white'>Sắp diễn ra</span>
                    </div>
                    <div className='flex flex-col m-auto'>
                          <p className='text-white font-bold text-3xl'>12:00</p>
                          <span className='text-white'>Sắp diễn ra</span>
                    </div>
                    <div className='flex flex-col m-auto'>
                          <p className='text-white font-bold text-3xl'>14:00</p>
                          <span className='text-white'>Sắp diễn ra</span>
                    </div>
                    <div className='flex flex-col m-auto'>
                          <p className='text-white font-bold text-3xl'>19:00</p>
                          <span className='text-white'>Sắp diễn ra</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default marketting2