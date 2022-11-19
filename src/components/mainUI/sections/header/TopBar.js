import React from "react";
import { FaPhoneAlt, FaEnvelope, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <section className="bg-light px-1 px-sm-4">
      <div className="d-sm-flex justify-content-between">
        <div className="d-flex justify-content-between text-muted py-2">
          <div className="d-flex me-2 me-sm-5">
            <FaPhoneAlt size={13} className="mt-1 me-2" />
            <p className="m-0">
              <small>+88012345678</small>
            </p>
          </div>
          <div className="d-flex">
            <FaEnvelope size={13} className="mt-1 me-2" />
            <p className="m-0">
              <small>demo@gmail.com</small>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center text-muted py-2">
          <Link to="/login">
            <div className="d-flex me-5">
              <FaSignInAlt size={13} className="mt-2 me-2" />
              <p className="m-0">
                <small>Login</small>
              </p>
            </div>
          </Link>
          <Link to="/register">
            <div className="d-flex">
              <FaUserAlt size={13} className="mt-1 me-2" />
              <p className="m-0">
                <small>Register</small>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
