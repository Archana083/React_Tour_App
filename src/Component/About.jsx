import React from "react";
import about1 from "../../src/assets/img/about1.png";
import mission from "../../src/assets/img/targeting.png";
import vission from "../../src/assets/img/shared-vision.png";
const About = () => {
  return (
    <>
      <div className="container py-40">
        <div className="row">
          <div className="col-md-6 col-12" data-aos="fade-right">
            <div className="image_wrap">
              <img src={about1} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-12 about " data-aos="fade-left">
            <h2>
                Learn New Skills To Go <span>Ahead For Your</span> Career.
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.</p>
            <div className="row mission">
              <div className="col-sm-2" >
                <img src={mission} className="w-100"/>
              </div>
              <div className="col-sm-10">
              <h2>Our Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
            </div>
            <br/>
            <div className="row mission">
              <div className="col-sm-2" >
                <img src={vission} className="w-100"/>
              </div>
              <div className="col-sm-10">
              <h2>Our Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
            </div>

            <div className='common-btn mt-5 d-flex justify-start'>
            <a href="#"  className='text-dark '> Discover More <i className="bi bi-arrow-right mx-2"></i></a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
