import React from "react";
import phone from "../../../../images/phone.jpg";
import laptop from "../../../../images/laptop.jpg";

const AllCategories = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div
              className="card p-3 p-md-5 shadow"
              style={{
                backgroundImage: `url(${phone})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex justify-content-center align-items-center bg-light rounded-pill shadow opacity-75 px-3">
                <p className="display-4 m-2">SmartPhones</p>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div
              className="card p-3 p-md-5 shadow bg-dark"
              style={{
                backgroundImage: `url(${laptop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex justify-content-center align-items-center bg-light rounded-pill shadow opacity-75 px-3">
                <p className="display-4 m-2">Laptops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
