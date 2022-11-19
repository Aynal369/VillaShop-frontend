import React, { useState } from "react";
import Navbar from "../components/mainUI/sections/header/Navbar";
import useDatabase from "../hook/useDatabase";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/features/cart/cartSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const [agree, setAgree] = useState(false);
  const { setIsClick, buttonRefresh } = useDatabase();
  const { register, handleSubmit } = useForm();
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setIsClick(true);
    toast.success("congratulations! You are successfully checkout");
    navigate("/");
    dispatch(clearCart());
    buttonRefresh();
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-light min-vh-100 py-3">
        <div className="container-fluid">
          <div className="row">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row justify-content-center g-4"
            >
              <div className="col-md-8">
                <h4 className="text-center">Account and billing details</h4>
                <div className="row g-4 justify-content-center">
                  <div className="col-sm-10">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      {...register("fullName")}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="col-sm-10">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      {...register("email")}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="col-sm-10">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      {...register("phone")}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-2 p-sm-4">
                  <h5 className="text-center">Order details</h5>
                  <hr />
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        {cart.cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>{item.title}</td>
                            <td className="text-end">${item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h6>Subtotal</h6>
                    <h6>${cartTotalAmount}</h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h6>Shipping</h6>
                    <div>
                      <p>Free shipping</p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>${cartTotalAmount}</h6>
                  </div>
                  <hr />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Direct bank transfer
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Check payments
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck3"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck3">
                      Cash on delivery
                    </label>
                  </div>
                  <p className="my-3 text-muted">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agree"
                      onChange={() => setAgree((value) => !value)}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree with the terms and conditions
                    </label>
                  </div>
                  {agree ? (
                    <button type="submit" className="btn btn-primary">
                      Check out
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled
                    >
                      Check out
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
