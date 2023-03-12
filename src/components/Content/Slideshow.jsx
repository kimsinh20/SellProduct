import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../../img/img1.jpeg"
import img2 from "../../img/img2.jpeg"
import img3 from "../../img/img3.jpeg"
import img4 from "../../img/img4.png"
import img5 from "../../img/img5.jpeg"
const Slideshow = () => {
    const Sdata = [
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: img1,
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: img2,
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: img3,
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: img4,
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: img5,
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <Slider {...settings} className="col-span-3">
            {Sdata.map((value, index) => {
                return (
                    <>
                        <div className='relative' key={index}>
                            {/* <div className='absolute top-2 left-48  z-10'>
                                <h1 className='text-white'>{value.title}</h1>
                                <p className='text-white '>{value.desc}</p>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8'>Visit Collections</button>
                            </div> */}
                            <div className='flex justify-end'>
                                <img src={value.cover}  className="" height={200} alt='' />
                            </div>
                        </div>
                    </>
                )
            })}
        </Slider>
    )
}

export default Slideshow