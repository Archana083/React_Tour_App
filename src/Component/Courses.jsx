import React from "react";
import img1 from "../../src/assets/img/c1.png";
import img2 from "../../src/assets/img/c2.png";
import img3 from "../../src/assets/img/c3.png";
import img4 from "../../src/assets/img/c4.png";
import img5 from "../../src/assets/img/c5.png";
import img6 from "../../src/assets/img/c6.png";


const courses = [
  {
    img: img1,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
  {
    img: img2,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
  {
    img: img3,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
  {
    img: img4,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
  {
    img: img5,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
  {
    img: img6,
    fee: "40",
    course:"art & design",
    desc:"Basic Fundamentals of Interior & Graphics Design",
    lesson:"3 Lessons",
    time:"3h 45m",
    star:"4.9",
    seats:"30 Seats Available"
  },
];

const Courses = () => {
  return (
    <div className="container mt-5">
      <div className="title mt-5 mt-sm-0">
        <h3 className="my-2"> Popular Courses</h3>
        <h2>
          Choose Our <span>Top Courses</span>
        </h2>
      </div>

      <div className="row my-4">
      {
        courses.map(( item, index ) => (
            <div className="col-lg-4 col-sm-6 col-xs-1 my-2" key={index}>
          <div className="card">
            <img className="card-img-top img" src={item.img} />
            <div className="overlay">
              <h2>${item.fee}</h2>
            </div>
            <div className="card-body">
              <button className="card_btn">
                <a href="">{item.course}</a>
              </button>
              <p> {item.desc}</p>
              <div className="d-flex justify-space-between align-item-center">
                <div className="d-flex">
                  <i class="bi bi-calendar3 me-2"></i>
                  <h2>{item.lesson}</h2>
                </div>
                <div className="d-flex">
                  <i class="bi bi-alarm mx-2"></i>
                  <h2>{item.time}</h2>
                </div>

                <div className="d-flex">
                  <i class="bi bi-star-fill mx-2"></i>
                  <h2>{item.star}</h2>
                </div>
              </div>
              <div className="d-flex">
                <i class="bi bi-table "></i>
                <h2 className="ms-2 seats">{item.seats}</h2>
              </div>
            </div>
          </div>
        </div>
        ))
      }        
      </div>
    </div>
  );
};

export default Courses;
