import React from "react";
import check from "../../src/assets/img/check.png";
import img2 from "../../src/assets/img/promo.png";
const LearningPlatform = () => {
  return (
    <div className="container-fluid pt-5 bg_img2">
      <div className="container">
        <div className="row">
          <div className=" col-md-6 col-12 col-98 aos-init aos-animate">
            <div className="title mt-5 mt-sm-0 pt-5 ">
              <h4 className="my-2"> Best Online Learning Platform</h4>
              <h2>
                One Platfrom & Many <br /> <span> Courses </span>
                For You
              </h2>
              <p>
                From blogs to emails to ad copies, auto-generate catchy,
                original, and high-converting copies in popular tones languages.
              </p>
              <div className="d-flex gap-3 align-items-center flex-item">
                <div className="icon_wrap2">
                  <img src={check} className="w-100" />
                </div>
                <p>9/10 Average Satisfaction Rate</p>
              </div>
              <div className="d-flex gap-3 align-items-center flex-item ">
                <div className="icon_wrap2">
                  <img src={check} className="w-100" />
                </div>
                <p>96% Completitation Rate</p>
              </div>
              <div className="d-flex gap-3 align-items-center flex-item">
                <div className="icon_wrap2">
                  <img src={check} className="w-100" />
                </div>
                <p>Friendly Environment & Expert Teacher</p>
              </div>
              <button className="common-btn">
                <a
                  href="#"
                  className="d-flex justify-space-between align-item-center px-3"
                >
                  Explore Our Courses <i className="bi bi-arrow-right mx-3"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-12 col-98 aos-init aos-animate">
            <img src={img2} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
