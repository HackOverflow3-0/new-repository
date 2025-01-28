import React from 'react';
import {Swiper,SwiperSlide} from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation  } from "swiper/modules";

import slide_image_1 from "./assets/images/mix1.jpeg";
import slide_image_2 from "./assets/images/mix2.jpeg";
import slide_image_3 from "./assets/images/mix3.jpeg";
import slide_image_4 from "./assets/images/mix4.jpeg";
import slide_image_5 from "./assets/images/mix5.jpeg";
import slide_image_6 from "./assets/images/mix6.jpeg";
 
function App() {
  return (
    <>
     <div className="container">
      <h1 className="heading">Hack Overfow 3.0</h1>
      <Swiper>
         
          <img src={slide_image_1} alt="slide_image" />
          <img src={slide_image_2} alt="slide_image" />
          <img src={slide_image_3} alt="slide_image" />
          <img src={slide_image_4} alt="slide_image" />
          <img src={slide_image_5} alt="slide_image" />
          <img src={slide_image_6} alt="slide_image" />
         
      </Swiper>
     </div>
    </>
    
  );
}

export default App;
