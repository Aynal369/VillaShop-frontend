import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  getTotals,
  addToCart,
  clearCart,
  decreaseCart,
  removeCart,
} from "../../reduxFeatures/cart/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <main className="container-fluid bg-light min-vh-100 py-3">
      <div className="row p-3">
        {cart.cartItems.length > 0 ? (
          <div className="table-responsive">
            <table className="table align-middle text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {cart.cartItems.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <div>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => dispatch(decreaseCart(item))}
                          >
                            <FaMinus />
                          </button>
                        </div>
                        <div className="mt-2 border-bottom px-4">
                          <h5>{item.cartQuantity}</h5>
                        </div>
                        <div>
                          {item.cartQuantity >= item.stock ? (
                            <button type="button" className="btn" disabled>
                              <FaPlus />
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <FaPlus />
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>${item.price * item.cartQuantity}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => dispatch(removeCart(item))}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger px-5"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear cart
                  </button>
                </div>
                <div>
                  <div className="d-flex justify-content-around border-bottom">
                    <h5>Total quantity</h5>
                    <h5>{cartTotalQuantity}</h5>
                  </div>
                  <div className="d-flex justify-content-around border-bottom mt-3">
                    <h5>Total amount</h5>
                    <h5>${cartTotalAmount}</h5>
                  </div>
                  <p className="text-muted">
                    Taxes and shipping calculated at checkout
                  </p>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-warning px-5 opacity-75"
                      onClick={() => navigate("/checkout")}
                    >
                      Proceed to checkout
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-dark px-5"
                      onClick={() => navigate("/shop")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center my-5">
            <h4>Shopping Cart</h4>
            <p className="text-danger">Your cart is currently empty</p>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-outline-secondary px-5"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ShoppingCart;
