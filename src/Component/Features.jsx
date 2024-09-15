import React from "react";
import docs from "../../src/assets/img/docs.png"
const Features = () => {
  return (
    <div className="container mt-5">
      <div className="title">
        <h3 className="my-2"> Why Choose Penn</h3>
        <h2>
          Find the <span>best features </span>of Penn.
        </h2>
      </div>

      <div className="row">
      <div className="col-md-4 col-sm-6 my-5">
        <div className="card ftur-card py-4 px-5">
          <div className="d-flex align-items-center gap-2">
      <div className="img_wrap4">
        <img src={docs} className="w-100"/>
      </div>
      <h2>
      Learn More Anywhere</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 my-5">
        <div className="card ftur-card py-4 px-5">
          <div className="d-flex align-items-center gap-2">
      <div className="img_wrap4">
        <img src={docs} className="w-100"/>
      </div>
      <h2>
      Learn More Anywhere</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 my-5">
        <div className="card ftur-card py-4 px-5">
          <div className="d-flex align-items-center gap-2">
      <div className="img_wrap4">
        <img src={docs} className="w-100"/>
      </div>
      <h2>
      Learn More Anywhere</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
