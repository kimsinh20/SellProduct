import React, { useEffect } from 'react'
import baner from "../../img/baner.png"
import baner1 from "../../img/baner1.jpeg"
import { useState } from 'react';
import {IoFlash} from "react-icons/io5"


const formatTime = (time) => {
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  if (hour.toString().length === 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length === 1) {
    minute = '0' + minute;
  }
  if (second.toString().length === 1) {
    second = '0' + second;
  }
  return `${hour}:${minute}:${second}`;
}
const SaleBaner = () => {
  const [time, setTime] = useState('');
  const handleTime = useEffect(() => {
    setInterval(() => {
      const timeCurent = new Date();
      setTime(formatTime(timeCurent));
    }, 1000)
    return () => clearInterval(handleTime);
  }, [])
  return (
    <div className='mt-4 col-span-2'>
      <div className='grid grid-cols-3 mb-3'>
        <h1 className='uppercase col-span-2 text-4xl font-bold text-center mr-4 text-orange-600 hover:text-red-400 flex'>
          F
          <img src='https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg' width={25} className='' alt='no img'></img>
          ash Sale
        </h1>
        <p className='text-3xl text-red-500 font-bold uppercase'>{time}</p>
      </div>
      <img src={baner} alt="no" width={350}  className="mb-4 ml-8" />
      <img src={baner1} alt="no" width={350} className="ml-8" />
    </div>
  )
}

export default SaleBaner