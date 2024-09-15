import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  client  from "../../src/assets/img/1.png";
import  client2  from "../../src/assets/img/2.png";
import  client3  from "../../src/assets/img/3.png";
import  client4  from "../../src/assets/img/4.png";
import  client5  from "../../src/assets/img/5.png";

const clients = [
    {
        img:client
    },
    {
        img:client2
    },
    {
        img:client3
    },
    {
        img:client4
    },
    {
        img:client5
    },
]

const Client = () => {
    return (
      <div className='container'>
        <div className='title2 w-50 m-auto my-5'>
          <h2 className='py-1'>Trusted Company Arround The World!</h2>
        </div>
        <Swiper
          spaceBetween={30} // Add space between slides (optional)
          slidesPerView={4} // Number of slides visible at once (adjust as needed)
          loop={true} // Enable infinite loop (optional)
          pagination={{ clickable: true }} // Add pagination dots (optional)
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='img_wrap2'>
                <img className='w-100' src={item.img} alt={`Client Logo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Client;