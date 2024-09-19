import React from "react";
import img1 from "../../src/assets/img/t1.png";
import img2 from "../../src/assets/img/t2.png";
import img3 from "../../src/assets/img/t3.png";
import img4 from "../../src/assets/img/t4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonial =[
  {
    id:1,
    img:img1
  },
  {
    id:2,
    img:img2
  },
  {
    id:3,
    img:img3
  },
  {
    id:4,
    img:img4
  },
]

const Testimoniols = () => {
  return (
    <div className="container pt-5 mt-5 bg_img3">
      <div className="title">
        <h3 className="my-2"> Testimonial</h3>
        <h2>
          What Says <span>Our Students </span>
        </h2>
        <div className="row">
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}        
        loop={true} // Allows the slides to loop       
        breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide for small screens (mobile)
              },
              768: {
                slidesPerView: 2, // 2 slides for medium screens (tablet)
              },
              1024: {
                slidesPerView: 3, // 3 slides for large screens (desktop)
              }
            }}
       >
        {
          testimonial.map((items) => (
            <SwiperSlide key={items.id}>
            <div className=" carousel-card" >
            <div className="carousel-body">
              {" "}
              <div>
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam
                nonumy eirmod tempor.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-left gap-3 mt-3 carousel-footer">
              <div className="carousel_img">
                <img src={items.img} className="w-100" />
              </div>
              <div className="carousel-content">
                <h2>James Clayton</h2>
                <p>-Design Expert</p>
              </div>
            </div>
          </div> 
          </SwiperSlide>
          ))
        }
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimoniols;
