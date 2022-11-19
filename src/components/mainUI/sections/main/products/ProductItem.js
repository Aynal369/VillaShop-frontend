import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../../../redux/features/wishlist/wishlistSlice";
import { addToCart } from "../../../../../redux/features/cart/cartSlice";

const ProductItem = ({ item }) => {
  const [clickCart, setClickCart] = useState(false);
  const [clickWishlist, setClickWishlist] = useState(false);
  const { brand, category, price, rating, thumbnail, title } = item;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    setClickCart(true);
    dispatch(addToCart(item));
  };
  const handleWishlist = () => {
    setClickWishlist(true);
    dispatch(addToWishlist(item));
  };
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card product_card" style={{ minHeight: "30rem" }}>
        <figure>
          <img
            src={thumbnail}
            className="card-img-top"
            alt={title}
            height={250}
          />
        </figure>

        <div className="card-body">
          <h5 className="card-title text-center mb-3">{title}</h5>
          <div className="d-flex justify-content-around text-muted">
            <button className="btn btn-light rounded-5 shadow-sm">
              {brand}
            </button>
            <button className="btn btn-light rounded-5 shadow-sm">
              {category}
            </button>
          </div>
          <div className="text-center mt-3">
            <Rating initialValue={rating} size={20} readonly />
          </div>
        </div>
        <div className="card-footer bg-light d-flex justify-content-between">
          <button type="button" className="btn btn-outline-light text-muted">
            $ <span className="fw-bold"> {price}</span>
          </button>
          <div className="d-flex">
            <div>
              {clickWishlist ? (
                <button
                  type="button"
                  className="btn btn-warning shadow rounded-pill me-2 text-muted"
                  disabled
                >
                  <FaHeart />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-warning border rounded-pill me-2 text-muted"
                  onClick={handleWishlist}
                >
                  <FaHeart />
                </button>
              )}
            </div>
            <div>
              {clickCart ? (
                <button
                  type="button"
                  className="btn btn-warning shadow rounded-pill me-2 text-muted"
                  disabled
                >
                  <FaShoppingCart />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-warning border rounded-pill me-2 text-muted"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
