/* eslint-disable no-unused-vars */
import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[490px] my-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner5}className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  
   <div className=" absolute md:w-[390px] ml-4 md:ml-12 p-4 bottom-20 md:bottom-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div><h2 className='text-6xl text-white'>Afortable price for car Servicesing</h2> </div>
    <div className='mt-1 mb-3'><p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione distinctio optio iste dolorem reiciendis id maxime eius ab nobis.</p>
    </div>
    <div className='flex gap-4'><button className='btn btn-outline btn-success'>Discover more</button>
    <button className='btn btn-primary'>Latest Project</button>
    </div>
    </div>
  
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} className="w-full rounded-xl h-[100%]" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;