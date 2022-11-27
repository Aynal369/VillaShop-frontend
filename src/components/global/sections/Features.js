import React from "react";
import { FaShippingFast, FaSync, FaUserLock, FaHeadset } from "react-icons/fa";

const featureData = [
  {
    title: "Free Shipping",
    shortDes: "On all order over $75.00",
    Icon: FaShippingFast,
  },
  {
    title: "Free Returns",
    shortDes: "If goods have problem",
    Icon: FaSync,
  },
  {
    title: "Secure Payment",
    shortDes: "100% secure payment",
    Icon: FaUserLock,
  },
  {
    title: "Support 24/7",
    shortDes: "Contact us 24hrs a day",
    Icon: FaHeadset,
  },
];

const Features = () => {
  return (
    <section>
      <div className="container-fluid my-5">
        <div className="row g-4 py-4">
          {featureData.map((item, index) => {
            const { title, shortDes, Icon } = item;
            return (
              <div className="col-sm-6 col-lg-3 align-self-center" key={index}>
                <div className="d-flex align-items-center p-3 rounded-2 featureCard">
                  <Icon size={55} className="text-warning opacity-75" />
                  <div className="ms-3">
                    <p className="m-0">
                      <strong>{title}</strong>
                    </p>
                    <p className="m-0">
                      <small>{shortDes}</small>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
