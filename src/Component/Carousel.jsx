import React from 'react'
import banner1 from '../../src/assets/img/banner1.png';
import banner2 from '../../src/assets/img/banner2.png';
import banner3 from '../../src/assets/img/banner3.png';

const carouselImg = [
  {
    img: banner1,
    heading:'First slide label',
  },
  {
    img:banner2,
    heading:'2nd slide label',
  },
  {
    img:banner3,
    heading:'3rd slide label',
  }
]

const Carousel = () => {
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active border-none"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
  {
    carouselImg.map(item => (
      <>
      <div className='banner-overlay'></div>
<div className="carousel-item active">
      <img src={item.img} className="d-block w-100" alt="..." />
  <div className="carousel-caption d-none d-md-block">
    <h5>{item.heading}</h5>
    <p>Some representative placeholder content for the first slide.</p>
    <button className='common-btn'>
      <a href="#" className='d-flex justify-space-between align-item-center px-3' >Explore Courses <i className="bi bi-arrow-right mx-3"></i></a>
    </button>
  </div>
</div>
</>
    ))
  }
  

    {/* <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div> */}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel