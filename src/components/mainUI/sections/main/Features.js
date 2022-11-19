import React from "react";
import { FaShippingFast, FaSync, FaUserLock, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <section>
      <div className="container-fluid border my-3">
        <div className="row g-4 py-4">
          <div className="col-sm-6 col-lg-3 align-self-center">
            <div className="d-flex align-items-center shadow-sm p-3 rounded-2">
              <FaShippingFast size={55} className="opacity-25" />
              <div className="ms-3">
                <p className="m-0">
                  <strong>Free Shipping</strong>
                </p>
                <p className="m-0">
                  <small>On all order over $75.00</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 align-self-center">
            <div className="d-flex align-items-center shadow-sm p-3 rounded-2">
              <FaSync size={55} className="opacity-25" />
              <div className="ms-3">
                <p className="m-0">
                  <strong>Free Returns</strong>
                </p>
                <p className="m-0">
                  <small>If goods have problem</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 align-self-center">
            <div className="d-flex align-items-center shadow-sm p-3 rounded-2">
              <FaUserLock size={55} className="opacity-25" />
              <div className="ms-3">
                <p className="m-0">
                  <strong>Secure Payment</strong>
                </p>
                <p className="m-0">
                  <small>100% secure payment</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 align-self-center">
            <div className="d-flex align-items-center shadow-sm p-3 rounded-2">
              <FaHeadset size={55} className="opacity-25" />
              <div className="ms-3">
                <p className="m-0">
                  <strong>Support 24/7</strong>
                </p>
                <p className="m-0">
                  <small>Contact us 24hrs a day</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
