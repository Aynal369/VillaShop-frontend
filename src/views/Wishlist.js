import React from "react";
import Navbar from "../components/mainUI/sections/header/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { removeWishlist } from "../redux/features/wishlist/wishlistSlice";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date("2020-07-22T13:22:10.2566789+00:00");
  const toDay = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const handleAddToCartAndRemove = (data) => {
    dispatch(addToCart(data));
    dispatch(removeWishlist(data));
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-light min-vh-100 py-3">
        <div className="container-fluid">
          {wishlist.wishlistItems.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table align-middle text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Thumbnail</th>
                      <th scope="col">Product Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Added</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Add to cart</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {wishlist.wishlistItems.map((item, index) => (
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
                        <td>{item.price}</td>
                        <td>{toDay}</td>
                        <td>{item.stock}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => handleAddToCartAndRemove(item)}
                          >
                            <FaShoppingCart />
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(removeWishlist(item))}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark px-5"
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="text-center my-5">
              <h4>Shopping wishlist</h4>
              <p className="text-danger">Your wishlist is currently empty</p>
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
    </>
  );
};

export default Wishlist;
