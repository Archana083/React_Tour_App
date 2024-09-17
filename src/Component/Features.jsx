import React from "react";
import docs from "../../src/assets/img/docs.png"
const featur=[
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
  {
    img:docs,
    title:'Learn More Anywhere',
    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
  },
]
const Features = () => {
  return (
    <div className="container mt-5">
      <div className="title">
        <h3 className="my-2"> Why Choose Penn</h3>
        <h2>
          Find the <span>best features </span>of Penn.
        </h2>
      </div>

      <div className="row mt-5">
      {
        featur.map((item,index) =>(
          <div className="col-lg-4 col-md-6 my-2" key={index}>
        <div className="card ftur-card py-4 px-5">
          <div className="d-flex align-items-center gap-2">
      <div className="img_wrap4">
        <img src={item.img} className="w-100"/>
      </div>
      <h2>{item.title}</h2>
          </div>
          <p>{item.desc}</p>
        </div>
      </div>
        ))
      }
     

      
      </div>
    </div>
  );
};

export default Features;
