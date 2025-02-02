import React,{useState} from 'react';
import {Swiper,SwiperSlide} from "swiper/react";



import 'swiper/css';
import './index.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {EffectCoverflow,Pagination,Navigation,Autoplay  } from "swiper/modules";

import slide_image_1 from "./assets/images/mix1.jpeg";
import slide_image_2 from "./assets/images/mix2.jpeg";
import slide_image_3 from "./assets/images/mix3.jpeg";
import slide_image_4 from "./assets/images/mix4.jpeg";
import slide_image_5 from "./assets/images/mix5.jpeg";
import slide_image_6 from "./assets/images/4u36ktors1la1.png";
 
function App() {

  const [swiperInstance, setSwiperInstance] = useState(null);

  // Handle autoplay stop on hover
  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  // Handle autoplay resume when mouse leaves
  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  return (
    <>
    <div className="mainSection"
     onMouseEnter={handleMouseEnter} // Stop autoplay on hover
     onMouseLeave={handleMouseLeave}
    >
    <div className="container">
      <h1 className="heading">Glimpses of Hack Overflow 2.0</h1>
      <Swiper
       
        onSwiper={setSwiperInstance}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
         
        autoplay={{
          delay: 2000,  // Slides change every 3 seconds
        }}
        speed={800}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
        onMouseEnter={handleMouseEnter} // Stop autoplay on hover
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
    </div>
     
    
    </>
    
  );
}

export default App;
